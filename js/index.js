document.addEventListener('DOMContentLoaded', function() {

    const cartCount = document.getElementById('cart-count');
    const toast = document.getElementById('cartToast');
    const orderBtns = document.querySelectorAll('.order-btn');

    let count = 0;
    let toastTimer = null;

    orderBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            count++;
            cartCount.textContent = count;

            toast.classList.add('show');

            if (toastTimer) clearTimeout(toastTimer);
            toastTimer = setTimeout(() => {
                toast.classList.remove('show');
            }, 2800);
        });
    });

});