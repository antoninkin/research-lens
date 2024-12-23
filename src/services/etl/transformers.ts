import { RawDataPoint, TransformedDataPoint } from './types';

export class DataTransformer {
    static transformDataPoint(raw: RawDataPoint): TransformedDataPoint {
        return {
            date: new Date(raw.timestamp),
            value: raw.value,
            category: raw.category,
            formattedValue: raw.value.toLocaleString(),
            metadata: raw.metadata || {},
        };
    }

    static aggregateByCategory(data: TransformedDataPoint[]): Record<string, number> {
        return data.reduce((acc, curr) => {
            acc[curr.category] = (acc[curr.category] || 0) + curr.value;
            return acc;
        }, {} as Record<string, number>);
    }

    static calculateMovingAverage(
        data: TransformedDataPoint[],
        windowSize: number
    ): TransformedDataPoint[] {
        return data.map((point, index) => {
            const window = data.slice(
                Math.max(0, index - windowSize + 1),
                index + 1
            );
            const average =
                window.reduce((sum, p) => sum + p.value, 0) / window.length;

            return {
                ...point,
                value: average,
                formattedValue: average.toLocaleString(),
            };
        });
    }
}