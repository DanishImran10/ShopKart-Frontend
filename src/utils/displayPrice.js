export function displayPrice(priceCents) {
    const priceDollars = priceCents / 100;
    return `$${priceDollars.toFixed(2)}`;
}