// Utility function to calculate price with tax
export function calculatePrice(basePrice: number, taxRate: number): number {
    return basePrice + (basePrice * taxRate);
}