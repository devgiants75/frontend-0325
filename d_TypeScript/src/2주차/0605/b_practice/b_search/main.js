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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
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
                        throw new Error('네티워크 응답이 정상적이지 않습니다.');
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
    var filterUsers_1 = function (users, query) {
        return users.filter(function (user) {
            // 사용자의 이름, 사용자명(username), 이메일 중 하나라도 쿼리 문자열을 포함하면 해당 사용자를 반환
            return user.name.toLowerCase().includes(query.toLowerCase()) ||
                user.username.toLowerCase().includes(query.toLowerCase()) ||
                user.email.toLowerCase().includes(query.toLowerCase());
        });
    };
    // 특정 키(name | email)를 기준으로 정렬하는 함수
    var sortUsers_1 = function (users, key) {
        return __spreadArray([], users, true).sort(function (a, b) { return a[key].localeCompare(b[key]); });
    };
    var addEventListeners_1 = function (users) {
        var searchInput = document.getElementById('search-input');
        var sortSelect = document.getElementById('sort-select');
        searchInput === null || searchInput === void 0 ? void 0 : searchInput.addEventListener('input', function () {
            var query = searchInput.value;
            var filteredUsers = filterUsers_1(users, query);
            var sortKey = sortSelect.value;
            var sortedUsers = sortUsers_1(filteredUsers, sortKey);
            displayUsers_1(sortedUsers);
        });
        sortSelect === null || sortSelect === void 0 ? void 0 : sortSelect.addEventListener('change', function () {
            var query = searchInput.value;
            var filteredUsers = filterUsers_1(users, query);
            var sortKey = sortSelect.value;
            var sortedUsers = sortUsers_1(filteredUsers, sortKey);
            displayUsers_1(sortedUsers);
        });
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
