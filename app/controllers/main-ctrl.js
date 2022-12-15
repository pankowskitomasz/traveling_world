angular.module("app").controller("main-ctrl",function($scope,$sce){
    $scope.testdata = [
        {
            code: "AR-01",
            description: "The Aruba is a great place for a family trip! It's a beautiful island with lovely beaches, and there are a lot of fun activities for kids. The people are very friendly and welcoming! If you're looking for a fun and relaxing vacation with your family, Aruba is definitely worth considering!",
            details:{
                all_inclusive: true,
                private_guide: true,
                premium_package: false
            },
            image: "img/offer/aruba.jpg",
            title:"Aruba for family",
            type:"family"
        },
        {
            code: "HA-01",
            description: "A weekend in Hawaii would be a great way to relax and enjoy some new experiences. There are so many beautiful beaches and scenic locations to check out, not to mention lots of great food and entertainment options. If you're looking for a fun getaway, Hawaii should definitely be on your list of potential destinations!",
            details:{
                all_inclusive: true,
                private_guide: true,
                premium_package: true
            },
            image: "img/offer/hawaii.jpg",
            title:"Weekend in Hawaii",
            type:"Group"
        }
    ];
    $scope.filters = {
        all_inclusive: false,
        families: false,
        groups:false,
        individual: false,
        private_guide: false,
        premium_package: false
    };
});