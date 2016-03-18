angular
  .module('Whatsapp')
  .controller('LoginCtrl', LoginCtrl);

function LoginCtrl($scope, $reactive, $state, $ionicLoading, $ionicPopup, $log) {
  $reactive(this).attach($scope);

  this.login = login;

  ////////////

  function login() {
    if (_.isEmpty(this.phone)) return;

    let confirmPopup = $ionicPopup.confirm({
      title: '号码确认',
      template: '<div>' + this.phone + '</div><div>你的电话号码是正确的吗？</div>',
      cssClass: 'text-center',
      okText: '是',
      okType: 'button-positive button-clear',
      cancelText: '编辑',
      cancelType: 'button-dark button-clear'
    });

    confirmPopup.then((res) => {
      if (!res) return;

      $ionicLoading.show({
        template: '发送验证码…'
      });

      Accounts.requestPhoneVerification(this.phone, (err) => {
        $ionicLoading.hide();

        if (err) {
          return handleError(err);
        }

        $state.go('confirmation', {phone: this.phone});
      });
    });
  }

  function handleError(err) {
    $log.error('Login error ', err);

    $ionicPopup.alert({
      title: err.reason || '登录失败',
      template: '请重试',
      okType: 'button-positive button-clear'
    });
  }
}

