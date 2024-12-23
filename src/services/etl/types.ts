export interface RawDataPoint {
    timestamp: string;
    value: number;
    category: string;
    metadata?: Record<string, unknown>;
}

export interface TransformedDataPoint {
    date: Date;
    value: number;
    category: string;
    formattedValue: string;
    metadata: Record<string, unknown>;
}
