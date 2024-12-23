import Papa from 'papaparse';
import { RawDataPoint } from './types';

export class DataLoader {
    static async loadCSV(file: File): Promise<RawDataPoint[]> {
        return new Promise((resolve, reject) => {
            Papa.parse(file, {
                header: true,
                dynamicTyping: true,
                skipEmptyLines: true,
                complete: (results) => {
                    resolve(results.data as RawDataPoint[]);
                },
                error: (error) => {
                    reject(error);
                },
            });
        });
    }

    static async loadJSON(file: File): Promise<RawDataPoint[]> {
        const text = await file.text();
        return JSON.parse(text);
    }
}