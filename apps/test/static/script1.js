var app = angular.module('test', []).config(function ($interpolateProvider) {
    $interpolateProvider.startSymbol('{%');
    $interpolateProvider.endSymbol('%}');
}); 
function InvoiceCntl($scope) {
    $scope.qty = 1;
    $scope.cost = 19.95;
}
it('should show of angular binding', function() {
    expect(binding('qty * cost')).toEqual('$19.95');
    input('qty').enter('2');
    input('cost').enter('5.00');
    expect(binding('qty * cost')).toEqual('$10.00');
});