var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
{
    var fetchUsers_1 = function () { return __awaiter(_this, void 0, void 0, function () {
        var response, users, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch('https://jsonplaceholder.typicode.com/users')];
                case 1:
                    response = _a.sent();
                    if (!response.ok) {
                        throw new Error('네트워크 요청이 정상적이지 않습니다.');
                    }
                    return [4 /*yield*/, response.json()];
                case 2:
                    users = _a.sent();
                    return [2 /*return*/, users];
                case 3:
                    error_1 = _a.sent();
                    console.error('Fetch error: ', error_1);
                    return [2 /*return*/, []];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var createUserCard_1 = function (user) {
        var userCard = document.createElement('div');
        userCard.className = 'user-card';
        // 데이터 속성에 사용자 ID를 설정
        userCard.dataset.userId = user.id.toString();
        userCard.innerHTML = "\n      <h2>".concat(user.name, "</h2>\n      <p><strong>Username:</strong> ").concat(user.username, "</p>\n      <p><strong>Email:</strong> ").concat(user.email, "</p>\n    ");
        return userCard;
    };
    var displayUsers_1 = function (users) {
        var userList = document.getElementById('user-list');
        if (userList) {
            userList.innerHTML = '';
            users.forEach(function (user) {
                // const userCard = document.getElementById('user-card');
                var userCard = createUserCard_1(user);
                userList.appendChild(userCard);
            });
        }
    };
    var showModal_1 = function (user) {
        var modal = document.getElementById('user-modal');
        var modalContent = document.getElementById('modal-user-details');
        if (modal && modalContent) {
            modalContent.innerHTML = "\n        <h2>".concat(user.name, "</h2>\n        <p><strong>Username:</strong> ").concat(user.username, "</p>\n        <p><strong>Email:</strong> ").concat(user.email, "</p>\n        <p><strong>Phone:</strong> ").concat(user.phone, "</p>\n        <p><strong>Website:</strong> ").concat(user.website, "</p>\n      ");
            modal.style.display = "block";
        }
    };
    var addEventListeners_1 = function (users) {
        var userList = document.getElementById('user-list');
        if (userList) {
            userList.addEventListener('click', function (event) {
                var target = event.target;
                // HTML 요소 객체(DOM)에 대한 .closest()메서드
                // : 해당 target과 가장 가까운 .user-card 클래스를 가진 조상 요소를 찾아 가져옴
                var userCard = target.closest('.user-card');
                if (userCard) {
                    // HTML 요소 객체(DOM)에; 대한 .dataset 속성
                    // : 해당 요소가 가진 데이터 속성을 가져오는 형식
                    var userId_1 = parseInt(userCard.dataset.userId || '0', 10);
                    var user = users.find(function (u) { return u.id === userId_1; });
                    if (user) {
                        showModal_1(user);
                    }
                }
            });
        }
        var modal = document.getElementById('user-modal');
        var closeModal = document.getElementsByClassName('close')[0];
        if (modal && closeModal) {
            closeModal.addEventListener('click', function () {
                modal.style.display = 'none';
            });
            window.addEventListener('click', function (event) {
                if (event.target === modal) {
                    modal.style.display = 'none';
                }
            });
        }
    };
    var init = function () { return __awaiter(_this, void 0, void 0, function () {
        var users;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetchUsers_1()];
                case 1:
                    users = _a.sent();
                    displayUsers_1(users);
                    addEventListeners_1(users);
                    return [2 /*return*/];
            }
        });
    }); };
    document.addEventListener('DOMContentLoaded', init);
}
