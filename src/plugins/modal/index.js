import Modal from './Modal';

export default {
    install (Vue) {
        // 팩토리
        let ModalConstructor = Vue.extend(Modal);
        let modalInstance = null;

        Vue.prototype.$modal = function () {
            
        }
        
        Vue.prototype.$modal.open = function (title, body, closeButton) {
            if(!modalInstance) {
                modalInstance = new ModalConstructor({
                    el: document.createElement('div'),
                    data () {
                        return {
                            title: title,
                            body: body,
                            closeButton: closeButton
                        }
                    }
                });
                // $el : document
                document.body.appendChild(modalInstance.$el);
            }

            modalInstance.title = title;
            modalInstance.body = body;
            modalInstance.closeButton = closeButton;
            modalInstance.isShowModal = true;
        }

        Vue.prototype.$modal.close = function () {
            if (!modalInstance) {
                return;
            }
            modalInstance.isSHowModal = false;
        }
    }
}