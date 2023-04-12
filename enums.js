var LoyaltyUser;
(function (LoyaltyUser) {
    LoyaltyUser[LoyaltyUser["GOLD_USER"] = 0] = "GOLD_USER";
    LoyaltyUser[LoyaltyUser["SILVER_USER"] = 1] = "SILVER_USER";
    LoyaltyUser[LoyaltyUser["BRONZE_USER"] = 2] = "BRONZE_USER";
})(LoyaltyUser || (LoyaltyUser = {}));
var Permissions;
(function (Permissions) {
    Permissions["ADMIN"] = "ADMIN";
    Permissions["READ_ONLY"] = "READ_ONLY";
})(Permissions || (Permissions = {}));
export { LoyaltyUser, Permissions };
