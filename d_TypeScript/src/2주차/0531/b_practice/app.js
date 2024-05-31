var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//! 사용자 관리를 위한 추상 클래스 정의
// : 사용자 생성, 업데이트, 삭제, 출력 기능
var AbstractUserManager = /** @class */ (function () {
    function AbstractUserManager() {
    }
    return AbstractUserManager;
}());
//!
var User = /** @class */ (function () {
    function User(name, email) {
        this.name = name;
        this.email = email;
    }
    User.prototype.getName = function () {
        return this.name;
    };
    User.prototype.getEmail = function () {
        return this.email;
    };
    User.prototype.setName = function (name) {
        this.name = name;
    };
    User.prototype.setEmail = function (email) {
        this.email = email;
    };
    return User;
}());
//!
var UserManager = /** @class */ (function (_super) {
    __extends(UserManager, _super);
    function UserManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.users = []; // 사용자 목록을 저장하는 배열
        return _this;
    }
    UserManager.prototype.createUser = function (user) {
        if (!user.getName() || !user.getEmail()) {
            displayMessage('Both name and email are required!');
            return;
        }
        var emailExists = this.users.some(function (u) { return u.getEmail() === user.getEmail(); });
        if (emailExists) {
            displayMessage('같은 이메일을 가진 유저가 이미 존재합니다.');
            return;
        }
        this.users.push(user);
        this.displayUsers();
        displayMessage('사용자 등록을 완료하였습니다.');
    };
    UserManager.prototype.updateUser = function (name, newUser) {
        var userToUpdate = this.users.find(function (user) { return user.getName() === name; });
        if (!userToUpdate) {
            displayMessage('이름이 일치하는 사용자가 없습니다.');
            return;
        }
        userToUpdate.setName(newUser.getName());
        userToUpdate.setEmail(newUser.getEmail());
        this.displayUsers();
        displayMessage('사용자 정보 업데이트를 완료하였습니다.');
    };
    UserManager.prototype.deleteUser = function (name) {
        var initialLength = this.users.length;
        this.users = this.users.filter(function (user) { return user.getName() !== name; });
        if (this.users.length !== initialLength) {
            this.displayUsers();
            displayMessage('사용자 데이터가 정상적으로 삭제되었습니다.');
        }
        else {
            displayMessage('해당 이름의 사용자가 없습니다.');
        }
    };
    UserManager.prototype.displayUsers = function () {
        var _a;
        var tableBody = (_a = document
            .getElementById('userTable')) === null || _a === void 0 ? void 0 : _a.getElementsByTagName('tbody')[0];
        if (tableBody) {
            tableBody.innerHTML = this.users
                .map(function (user) {
                return "<tr>\n              <td>".concat(user.getName(), "</td>\n              <td>").concat(user.getEmail(), "</td>\n            </tr>");
            }).join(''); // 행들을 하나의 문자열로 연결
        }
        else {
            console.error('Table body not found!');
        }
    };
    return UserManager;
}(AbstractUserManager));
function displayMessage(message) { }
var userManager = new UserManager();
function createUser() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    userManager.createUser(new User(name, email));
}
function updateUser() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    userManager.updateUser(name, new User(name, email));
}
function deleteUser() {
    var name = document.getElementById('name').value;
    userManager.deleteUser(name);
}
