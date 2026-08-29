export function itemsInCart(cart) {
    let quantity = 0

    for (const item of cart) {
        quantity += item.quantity;
    }

    return quantity;
}