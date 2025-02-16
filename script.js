let subtotal = 100;
        let discountApplied = false;

        function applyPromo() {
            if (discountApplied) {
                document.getElementById('message').innerHTML = "<span class='error'>Promo code already used!</span>";
                return;
            }

            let code = document.getElementById('promoCode').value.trim().toLowerCase();
            let discount = 0;

            if (code === "ostad10") {
                discount = subtotal * 0.10;
            } else if (code === "ostad5") {
                discount = subtotal * 0.05;
            } else {
                document.getElementById('message').innerHTML = "<span class='error'>❌ Invalid Promo Code!</span>";
                return;
            }

            discountApplied = true;
            let finalTotal = subtotal - discount;

            document.getElementById('discount').innerText = discount.toFixed(2);
            document.getElementById('finalTotal').innerText = finalTotal.toFixed(2);
            document.getElementById('message').innerHTML = "<span class='success'>✅ Promo code applied successfully!</span>";
        }