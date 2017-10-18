var user = { firstName: 'Vasya'};
var admin = { firstName: 'Admin'};

function func() {
    alert ( this.firstName );
}

user.f = func;
admin.g = func;

user.f();
admin.g();