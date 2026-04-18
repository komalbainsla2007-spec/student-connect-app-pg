// Simple validators
export function isEmailValid(email: string): boolean {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

export function isNotEmpty(value: string): boolean {
    return value.trim() !== '';
}