angular.module('swagShop').component('cart', {
    templateUrl: 'app/cart/cart.template.html',
    controllerAs: 'cartCtrl',
    controller: function (cartSrvc) {
        this.cart = cartSrvc.currentCart();

        this.total = function () {
            let runningTot = 0;

            for (let i = 0; i < this.cart.length; i++) {
                runningTot += this.cart[i].price;
            }
            return runningTot;
        }

        this.checkout = function () {
            this.cart = cartSrvc.checkout();
        }

        this.removeItem = function (index) {
            cartSrvc.remove(index);
        }
    }
})