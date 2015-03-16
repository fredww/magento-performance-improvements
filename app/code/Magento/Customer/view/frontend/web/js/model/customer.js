/**
 * {license_notice}
 *
 * @copyright   {copyright}
 * @license     {license_link}
 */
/*jshint browser:true jquery:true*/
/*global alert*/
define(['mage/storage'], function(storage) {
    var isLoggedIn = false;
    return {
        isLoggedIn: function() {
            return isLoggedIn;
        },
        setIsLoggedIn: function (flag) {
            isLoggedIn = flag;
        },
        getBillingAddressList: function () {
            return storage.get('customer/address/billingList');
        }
    }
});
