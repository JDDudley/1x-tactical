(function () {

    angular.module('1x')
        .component('admin', {
            templateUrl: 'app/components/admin/admin.html',
            controller: AdminController
        })

    function AdminController(AdminService) {
        var ac = this;
        var as = AdminService;
        //adds more image fields to URL image input //
        ac.imgId = 0;
        // ac.moreImage = () => {
        //     // debugger 
        //     let productImg = $('#product-images');
        //     let eventImg = $('#event-images');
        //     ac.imgId++
        //     let imgTemplate =
        //      `<input class="form-control image-class" ng-model="$ctrl.newItem.image[${ac.imgId}]" type="text" placeholder="Image Url" id=${ac.imgId}>`;
        //     type == 'product' ? productImg.append(imgTemplate) : null;
        //     type == 'event' ? eventImg.append(imgTemplate) : null;
        // }

        ac.addItem = (product) => {
            debugger
            console.log(product)
            as.addProduct(product);
        }

        ac.addEvent = (event) => {
            as.addEvent(event)
        }

    }
})(); 