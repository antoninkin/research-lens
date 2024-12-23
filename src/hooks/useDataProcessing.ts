import { useState, useCallback } from 'react';
import { DataLoader } from '../services/etl/loader';
import { DataTransformer } from '../services/etl/transformers';
import { RawDataPoint, TransformedDataPoint } from '../services/etl/types';

interface UseDataProcessingReturn {
    data: TransformedDataPoint[];
    isLoading: boolean;
    error: Error | null;
    processFile: (file: File) => Promise<void>;
    aggregateData: () => Record<string, number>;
    calculateMovingAverage: (windowSize: number) => TransformedDataPoint[];
}

export const useDataProcessing = (): UseDataProcessingReturn => {
    const [data, setData] = useState<TransformedDataPoint[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);

    const processFile = useCallback(async (file: File) => {
        setIsLoading(true);
        setError(null);

        try {
            let rawData: RawDataPoint[];

            if (file.type === 'text/csv') {
                rawData = await DataLoader.loadCSV(file);
            } else if (file.type === 'application/json') {
                rawData = await DataLoader.loadJSON(file);
            } else {
                throw new Error('Unsupported file type');
            }

            const transformedData = rawData.map(DataTransformer.transformDataPoint);
            setData(transformedData);
        } catch (err) {
            setError(err instanceof Error ? err : new Error('Unknown error occurred'));
        } finally {
            setIsLoading(false);
        }
    }, []);

    const aggregateData = useCallback(() => {
        return DataTransformer.aggregateByCategory(data);
    }, [data]);

    const calculateMovingAverage = useCallback((windowSize: number) => {
        return DataTransformer.calculateMovingAverage(data, windowSize);
    }, [data]);

    return {
        data,
        isLoading,
        error,
        processFile,
        aggregateData,
        calculateMovingAverage,
    };
};