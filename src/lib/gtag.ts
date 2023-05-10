import { NextWebVitalsMetric } from "next/app";

export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GTAG

export function reportWebVitals ({id, name, label, value} : NextWebVitalsMetric) {
    
}