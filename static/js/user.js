var user = {
    login: function() {
        var userid = $("[name=Username]").val()
        var password = $("[name=Password]").val()

        $('.action.login').addClass("loading").removeClass("error");
        var xhr = $.ajax("/login/", {
            type: 'POST',
            data: JSON.stringify({userid: userid, password: password}),
            contentType: 'application/json',
        });
        xhr.done(function() {
            $('.action.login').removeClass("loading");
            messages.success("You have been logged in.", true);
            $(".user .login").hide();
            $(".user .logout").show();
            editor.list_custom();
        });
        xhr.fail(function() {
            $('.action.login').addClass("error").removeClass("loading");;
            messages.error("The password you entered is incorrect.", true)
        });
    }
};

$(document).ready(function() {
    $('.action.login').click(user.login);
});
