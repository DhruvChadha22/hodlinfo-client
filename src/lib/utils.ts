
export const formatCurrency = (currency: string) => {
    const num = Number(currency);

    const formatted = num.toLocaleString('en-IN', {
        maximumFractionDigits: 2,
        style: 'currency',
        currency: 'INR'
    });

    return formatted;
};
