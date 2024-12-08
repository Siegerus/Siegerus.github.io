/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/modules/action/action.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/action/action.js ***!
  \*********************************************/
/***/ (() => {

window.addEventListener("DOMContentLoaded", function () {
  "use strict";

  if (document.body.querySelector(".action")) {
    var btn = document.querySelector(".action__btn"),
      modalWindow = document.querySelector(".action-modal"),
      close = document.querySelector(".action-modal__close"),
      overlay = document.querySelector(".action-modal__overlay");
    var showModal = function showModal() {
      btn.addEventListener("click", function () {
        overlay.style.display = "block";
        close.classList.add("animation__type__fade");
        modalWindow.classList.add("animation__type__fade_modal");
        overlay.classList.remove("animation__type__fadeOut_modal");
      });
    };
    showModal();
    var closeByOverclick = function closeByOverclick(fadeItem) {
      overlay.addEventListener("click", function (e) {
        var curentModal = e.target.closest(".modal");
        if (!curentModal) {
          fadeItem.classList.remove("animation__type__fade_modal");
          close.classList.remove("animation__type__fade");
          fadeItem.classList.add("animation__type__fadeOut_modal");
          fadeItem.addEventListener("animationend", function (e) {
            if (e.target.classList.contains("animation__type__fadeOut_modal")) {
              overlay.style.display = "none";
            }
          });
        }
      });
    };
    closeByOverclick(overlay);
    var launchTimer = function launchTimer() {
      function getTime() {
        var deadline = "2025-01-1",
          t = Date.parse(deadline) - Date.parse(new Date()),
          seconds = Math.floor(t / 1000 % 60),
          minutes = Math.floor(t / 1000 / 60 % 60),
          hours = Math.floor(t / 1000 / 60 / 60 % 24),
          days = Math.floor(t / 1000 / 60 / 60 / 24);
        return {
          "total": t,
          "seconds": seconds,
          "minutes": minutes,
          "hours": hours,
          "days": days
        };
      }
      function setTime() {
        var days = Array.from(document.querySelectorAll(".action__days")),
          hours = Array.from(document.querySelectorAll(".action__hours")),
          minutes = Array.from(document.querySelectorAll(".action__minutes")),
          seconds = Array.from(document.querySelectorAll(".action__seconds"));
        function updateTime() {
          var get = getTime();
          function setValue(timeItem, timeValue) {
            for (var i = 0; i < timeItem.length; i++) {
              timeItem[i].textContent = timeValue;
              if (timeValue < 10) {
                timeItem[i].textContent = "0" + timeValue;
              } else {
                timeItem[i].textContent = timeValue;
              }
              if (get.total <= 0) {
                clearInterval(_int);
                timeItem[i].textContent = "00";
              }
            }
          }
          setValue(days, get.days);
          setValue(hours, get.hours);
          setValue(minutes, get.minutes);
          setValue(seconds, get.seconds);
        }
        var _int = setInterval(updateTime, 1000);
      }
      setTime();
    };
    launchTimer();
    var getValue = function getValue() {
      var radio = document.querySelectorAll("input[type='radio'][name=couple]"),
        btn = document.querySelector(".action-modal__btn");
      radio.forEach(function (item, i) {
        item.addEventListener("click", function () {
          if (radio[i].checked) {
            var val = radio[i].value;
            btn.textContent = "Оплатить " + val;
          }
        });
      });
    };
    getValue();
    var setTabs = function setTabs(tabClass, contentClass) {
      var tabs = Array.from(document.querySelectorAll(tabClass)),
        tabsContent = Array.from(document.querySelectorAll(contentClass));
      function hideContent(a) {
        for (var b = a; b < tabsContent.length; b++) {
          tabsContent[b].classList.remove("show");
          tabsContent[b].classList.add("hide");
        }
      }
      hideContent(1);
      function showContent(c) {
        if (tabsContent[c].classList.contains("hide")) {
          tabsContent[c].classList.remove("hide");
          tabsContent[c].classList.add("show");
        }
      }
      tabs.forEach(function (item) {
        item.addEventListener("click", function (e) {
          for (var i = 0; i < tabs.length; i++) {
            if (tabs[i].classList.contains("action__tabs")) {
              tabs[i].classList.remove("action__tabs_active");
              this.classList.add("action__tabs_active");
            }
            if (e.target == tabs[i]) {
              hideContent(0);
              showContent(i);
            }
          }
        });
      });
    };
    setTabs(".action__tabs", ".action__content");
    setTabs(".action-modal__label", ".action-modal__content");
  }
});

/***/ }),

/***/ "./src/blocks/modules/autorization/autorization.js":
/*!*********************************************************!*\
  !*** ./src/blocks/modules/autorization/autorization.js ***!
  \*********************************************************/
/***/ (() => {

window.addEventListener("DOMContentLoaded", function () {
  "use strict";

  if (document.body.querySelector(".autorization")) {
    var tabs = document.querySelectorAll(".autorization__tabs"),
      content = document.querySelectorAll(".autorization__content"),
      forget = document.querySelector(".autorization__forgetPass"),
      block = document.querySelector(".autorization__block"),
      blockPass = document.querySelector(".autorization__pass"),
      select = document.querySelector(".feed-form__select_sign"),
      selectText = document.querySelector(".feed-form__select > span"),
      optionsBlock = document.querySelector(".feed-form__optionsWrap"),
      options = optionsBlock.querySelectorAll(".feed-form__option"),
      optionsRadio = optionsBlock.querySelectorAll(".feed-form__hidden");
    var contentHide = function contentHide(b) {
      for (var a = b; a < content.length; a++) {
        content[a].classList.remove("show");
        content[a].classList.add("hide");
      }
    };
    contentHide(1);
    var contentShow = function contentShow(c) {
      if (content[c].classList.contains("hide")) {
        content[c].classList.remove("hide");
        content[c].classList.add("show");
      }
    };
    tabs.forEach(function (item) {
      item.addEventListener("click", function (e) {
        for (var i = 0; i < tabs.length; i++) {
          tabs[i].classList.remove("autorization__tabs_active");
          this.classList.add("autorization__tabs_active");
          if (e.target == tabs[i]) {
            contentHide(0);
            contentShow(i);
          }
        }
      });
    });
    var blockShow = function blockShow(itemClick, itemHide, itemShow) {
      itemClick.addEventListener("click", function () {
        itemHide.style.display = "none";
        itemShow.style.display = "block";
      });
    };
    blockShow(forget, block, blockPass);
    var selectSet = function selectSet(clickItem) {
      clickItem.addEventListener("click", function (e) {
        if (e.target == this) {
          select.classList.toggle("feed-form__select_sign_active");
          optionsBlock.classList.toggle("feed-form__optionsWrap_active");
          optionsBlock.classList.remove("animation__type__fadeOut_select");
          optionsBlock.classList.add("animation__type__fade_select");
        }
        for (var i = 0; i < options.length; i++) {
          if (e.target == options[i]) {
            select.classList.remove("feed-form__select_sign_active");
            optionsBlock.classList.remove("animation__type__fade_select");
            optionsBlock.classList.add("animation__type__fadeOut_select");
            optionsBlock.addEventListener("animationend", function (e) {
              if (e.target.classList.contains("animation__type__fadeOut_select")) {
                optionsBlock.classList.remove("feed-form__optionsWrap_active");
              }
            });
          }
        }
      });
      selectText.textContent = optionsRadio[0].value;
      optionsRadio.forEach(function (item, i) {
        item.addEventListener("input", function () {
          if (optionsRadio[i].checked) {
            var val = optionsRadio[i].value;
            selectText.textContent = val;
          }
        });
      });
      document.body.addEventListener("click", function (e) {
        if (e.target !== select && e.target !== selectText) {
          select.classList.remove("feed-form__select_sign_active");
          optionsBlock.classList.remove("animation__type__fade_select");
          optionsBlock.classList.add("animation__type__fadeOut_select");
          optionsBlock.addEventListener("animationend", function (e) {
            if (e.target.classList.contains("animation__type__fadeOut_select")) {
              optionsBlock.classList.remove("feed-form__optionsWrap_active");
            }
          });
        }
      });
    };
    selectSet(select);
    selectSet(selectText);
  }
});

/***/ }),

/***/ "./src/blocks/modules/bangles/bangles.js":
/*!***********************************************!*\
  !*** ./src/blocks/modules/bangles/bangles.js ***!
  \***********************************************/
/***/ (() => {

window.addEventListener("DOMContentLoaded", function () {});

/***/ }),

/***/ "./src/blocks/modules/benefit/benefit.js":
/*!***********************************************!*\
  !*** ./src/blocks/modules/benefit/benefit.js ***!
  \***********************************************/
/***/ (() => {

window.addEventListener("DOMContentLoaded", function () {});

/***/ }),

/***/ "./src/blocks/modules/connect/connect.js":
/*!***********************************************!*\
  !*** ./src/blocks/modules/connect/connect.js ***!
  \***********************************************/
/***/ (() => {

window.addEventListener("DOMContentLoaded", function () {});

/***/ }),

/***/ "./src/blocks/modules/events/events.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/events/events.js ***!
  \*********************************************/
/***/ (() => {

window.addEventListener("DOMContentLoaded", function () {
  "use strict";

  if (document.body.querySelector(".events")) {
    var overlay = document.querySelector(".action-modal__overlay"),
      modalWindow = document.querySelector(".action-modal"),
      close = document.querySelector(".action-modal__close"),
      btn = document.querySelectorAll(".events__btn");
    var showModal = function showModal() {
      btn.forEach(function (item) {
        item.addEventListener("click", function () {
          overlay.style.display = "block";
          close.classList.add("animation__type__fade");
          modalWindow.classList.add("animation__type__fade_modal");
          overlay.classList.remove("animation__type__fadeOut_modal");
        });
      });
    };
    showModal();
    var closeByOverclick = function closeByOverclick(fadeItem) {
      overlay.addEventListener("click", function (e) {
        var curentModal = e.target.closest(".modal");
        if (!curentModal) {
          fadeItem.classList.remove("animation__type__fade_modal");
          close.classList.remove("animation__type__fade");
          fadeItem.classList.add("animation__type__fadeOut_modal");
          fadeItem.addEventListener("animationend", function (e) {
            if (e.target.classList.contains("animation__type__fadeOut_modal")) {
              overlay.style.display = "none";
            }
          });
        }
      });
    };
    closeByOverclick(overlay);
    var getValue = function getValue() {
      var radio = document.querySelectorAll("input[type='radio'][name=couple]"),
        btn = document.querySelector(".action-modal__btn");
      radio.forEach(function (item, i) {
        item.addEventListener("click", function () {
          if (radio[i].checked) {
            var val = radio[i].value;
            btn.textContent = "Оплатить " + val;
          }
        });
      });
    };
    getValue();
    var setTabs = function setTabs(tabClass, contentClass) {
      var tabs = Array.from(document.querySelectorAll(tabClass)),
        tabsContent = Array.from(document.querySelectorAll(contentClass));
      function hideContent(a) {
        for (var b = a; b < tabsContent.length; b++) {
          tabsContent[b].classList.remove("show");
          tabsContent[b].classList.add("hide");
        }
      }
      hideContent(1);
      function showContent(c) {
        if (tabsContent[c].classList.contains("hide")) {
          tabsContent[c].classList.remove("hide");
          tabsContent[c].classList.add("show");
        }
      }
      tabs.forEach(function (item) {
        item.addEventListener("click", function (e) {
          for (var i = 0; i < tabs.length; i++) {
            if (tabs[i].classList.contains("action__tabs")) {
              tabs[i].classList.remove("action__tabs_active");
              this.classList.add("action__tabs_active");
            }
            if (e.target == tabs[i]) {
              hideContent(0);
              showContent(i);
            }
          }
        });
      });
    };
    setTabs(".action-modal__label", ".action-modal__content");
  }
});

/***/ }),

/***/ "./src/blocks/modules/feed-form/feed-form.js":
/*!***************************************************!*\
  !*** ./src/blocks/modules/feed-form/feed-form.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! validate.js */ "./node_modules/validate.js/validate.js");
/* harmony import */ var validate_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(validate_js__WEBPACK_IMPORTED_MODULE_0__);

window.addEventListener("DOMContentLoaded", function () {
  "use strict";

  var message = {
      "error": "Что то пошло не так :(",
      "loading": "Отправка данных...",
      "done": "Спасибо!"
    },
    messageBox = this.document.createElement("div"),
    modal = this.document.querySelectorAll(".modal__overlay"),
    verifyForm = document.getElementById("verify"),
    armorFirstForm = this.document.getElementById("armor-first-step"),
    reviewsForm = this.document.getElementById("reviews-form"),
    connectForm = this.document.getElementById("connect-form"),
    joinForm = this.document.getElementById("join-modal"),
    autorizationForm = this.document.getElementById("autorization"),
    forgetForm = this.document.getElementById("forget"),
    registrationForm = this.document.getElementById("registration");
  messageBox.classList.add("feed-form__messageBox");
  messageBox.classList.add("animation__type__fade");
  (validate_js__WEBPACK_IMPORTED_MODULE_0___default().validators).email.options = {
    message: "^Введите корректный Email"
  };
  (validate_js__WEBPACK_IMPORTED_MODULE_0___default().validators).presence.options = {
    message: "^Обязательно к заполнению"
  };
  (validate_js__WEBPACK_IMPORTED_MODULE_0___default().validators).equality.options = {
    message: "^Пароли не совпадают"
  };
  (validate_js__WEBPACK_IMPORTED_MODULE_0___default().options) = {
    format: "grouped"
  };
  var submitForm = function submitForm(form, url) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var formData = new FormData(form);
      var request = new XMLHttpRequest();
      var sendRequest = function sendRequest() {
        request.open("POST", url);
        request.send(formData);
        request.addEventListener("readystatechange", function () {
          if (request.readyState === 4 && request.status == 200) {
            document.body.appendChild(messageBox);
            messageBox.innerHTML = message.done;
            form.reset();
            modal.forEach(function (item) {
              return item.style.display = "none";
            });
          } else if (request.readyState < 4) {
            document.body.appendChild(messageBox);
            messageBox.innerHTML = message.loading;
          } else {
            document.body.appendChild(messageBox);
            messageBox.innerHTML = message.error;
          }
          document.body.addEventListener("click", function () {
            if (document.body.querySelector(".feed-form__messageBox")) {
              document.body.removeChild(messageBox);
            }
          });
        });
      };
      var toReplace = function toReplace() {
        location.replace("/index.html");
      };
      if (form.id == "join-modal") {
        var mailVal = document.getElementById("join-email").value,
          rulesVal = document.getElementById("join-modal-checkbox").checked,
          mailErrorBox = document.querySelector(".feed-form__errorBox_join-email"),
          rulesErrorBox = document.querySelector(".feed-form__errorBox_join-modal-checkbox"),
          ErrorBox = joinForm.querySelectorAll(".feed-form__errorBox"),
          inputs = {
            email: mailVal,
            rules: rulesVal
          },
          constraints = {
            email: {
              presence: true,
              email: true
            },
            rules: {
              presence: true,
              type: {
                type: function type(checked) {
                  return checked == true;
                },
                message: "^Ознакомьтесь с правилами клуба"
              }
            }
          },
          validationResult = validate_js__WEBPACK_IMPORTED_MODULE_0___default()(inputs, constraints);
        if (validationResult) {
          joinForm.querySelectorAll("input").forEach(function (item) {
            return item.style.border = "solid 2px #ff5656";
          });
          ErrorBox.forEach(function (item) {
            return item.style.display = "block";
          });
          mailErrorBox.textContent = validationResult.email;
          rulesErrorBox.textContent = validationResult.rules;
        } else {
          joinForm.querySelectorAll("input").forEach(function (item) {
            return item.style.border = "none";
          });
          ErrorBox.forEach(function (item) {
            return item.style.display = "none";
          });
          ErrorBox.forEach(function (item) {
            return item.textContent = "";
          });
          sendRequest();
        }
      }
      if (form.id == "armor-first-step") {
        var userVal = validate_js__WEBPACK_IMPORTED_MODULE_0___default().collectFormValues(armorFirstForm).name,
          ageVal = validate_js__WEBPACK_IMPORTED_MODULE_0___default().collectFormValues(armorFirstForm).age,
          costVal = validate_js__WEBPACK_IMPORTED_MODULE_0___default().collectFormValues(armorFirstForm).couple,
          coupleVal = validate_js__WEBPACK_IMPORTED_MODULE_0___default().collectFormValues(armorFirstForm).sex,
          userErrorBox = document.querySelector(".feed-form__errorBox_armor-name"),
          coupleErrorBox = document.querySelector(".feed-form__errorBox_armor-couple"),
          ageErrorBox = document.querySelector(".feed-form__errorBox_armor-age"),
          costErrorBox = document.querySelector(".feed-form__errorBox_armor-price"),
          _ErrorBox = armorFirstForm.querySelectorAll(".feed-form__errorBox"),
          _inputs = {
            couple: coupleVal,
            username: userVal,
            age: ageVal,
            cost: costVal
          },
          _constraints = {
            couple: {
              presence: {
                allowEmpty: false,
                message: "^Выберите пол"
              }
            },
            username: {
              presence: true,
              length: {
                minimum: 3,
                maximum: 40,
                message: "^Введите от 3 до 40 символов"
              }
            },
            age: {
              presence: true,
              length: {
                minimum: 2,
                maximum: 2,
                message: "^Укажите корректный возраст"
              },
              numericality: {
                onlyInteger: true,
                greaterThan: 17,
                message: "^Вам должно быть не меньше 18ти"
              }
            },
            cost: {
              presence: {
                allowEmpty: false,
                message: "^Выберите тип билета"
              }
            }
          },
          _validationResult = validate_js__WEBPACK_IMPORTED_MODULE_0___default()(_inputs, _constraints);
        if (_validationResult) {
          armorFirstForm.querySelectorAll("input").forEach(function (item) {
            return item.style.borderColor = "#ff5656";
          });
          _ErrorBox.forEach(function (item) {
            return item.style.display = "block";
          });
          coupleErrorBox.textContent = _validationResult.couple;
          userErrorBox.textContent = _validationResult.username;
          ageErrorBox.textContent = _validationResult.age;
          costErrorBox.textContent = _validationResult.cost;
        } else {
          armorFirstForm.querySelectorAll("input").forEach(function (item) {
            return item.style.borderColor = "#915c46";
          });
          _ErrorBox.forEach(function (item) {
            return item.style.display = "none";
          });
          _ErrorBox.forEach(function (item) {
            return item.textContent = "";
          });
          sendRequest();
        }
      }
      if (form.id == "reviews-form") {
        var eventVal = validate_js__WEBPACK_IMPORTED_MODULE_0___default().collectFormValues(reviewsForm).event,
          _userVal = validate_js__WEBPACK_IMPORTED_MODULE_0___default().collectFormValues(reviewsForm).user,
          messageVal = validate_js__WEBPACK_IMPORTED_MODULE_0___default().collectFormValues(reviewsForm).message,
          rateVal = validate_js__WEBPACK_IMPORTED_MODULE_0___default().collectFormValues(reviewsForm).rate,
          eventErrorBox = document.querySelector(".feed-form__errorBox_reviews-event"),
          _userErrorBox = document.querySelector(".feed-form__errorBox_reviews-user"),
          messageErrorBox = document.querySelector(".feed-form__errorBox_reviews-message"),
          rateErrorBox = document.querySelector(".feed-form__errorBox_reviews-rate"),
          _ErrorBox2 = reviewsForm.querySelectorAll(".feed-form__errorBox"),
          _inputs2 = {
            event: eventVal,
            user: _userVal,
            message: messageVal,
            rate: rateVal
          },
          _constraints2 = {
            event: {
              presence: true
            },
            user: {
              presence: true,
              length: {
                minimum: 3,
                maximum: 40,
                message: "^Введите от 3 до 40 символов"
              }
            },
            message: {
              presence: true,
              length: {
                minimum: 10,
                maximum: 500,
                message: "^Введите от 10 до 500 символов"
              }
            },
            rate: {
              presence: true
            }
          },
          _validationResult2 = validate_js__WEBPACK_IMPORTED_MODULE_0___default()(_inputs2, _constraints2);
        if (_validationResult2) {
          reviewsForm.querySelectorAll("input").forEach(function (item) {
            return item.style.borderColor = "#ff5656";
          });
          reviewsForm.querySelector("textarea").style.borderColor = "#ff5656";
          reviewsForm.querySelector("select").style.borderColor = "#ff5656";
          _ErrorBox2.forEach(function (item) {
            return item.style.display = "block";
          });
          eventErrorBox.textContent = _validationResult2.event;
          _userErrorBox.textContent = _validationResult2.user;
          messageErrorBox.textContent = _validationResult2.message;
          rateErrorBox.textContent = _validationResult2.rate;
        } else {
          reviewsForm.querySelectorAll("input").forEach(function (item) {
            return item.style.borderColor = "#915c46";
          });
          reviewsForm.querySelector("textarea").style.borderColor = "#915c46";
          reviewsForm.querySelector("select").style.borderColor = "#915c46";
          _ErrorBox2.forEach(function (item) {
            return item.style.display = "none";
          });
          _ErrorBox2.forEach(function (item) {
            return item.textContent = "";
          });
          sendRequest();
        }
      }
      if (form.id == "registration") {
        var checkboxVal = document.getElementById("sign-checkbox").checked,
          emailVal = validate_js__WEBPACK_IMPORTED_MODULE_0___default().collectFormValues(registrationForm).email,
          selectVal = validate_js__WEBPACK_IMPORTED_MODULE_0___default().collectFormValues(registrationForm).sex,
          passwordVal = validate_js__WEBPACK_IMPORTED_MODULE_0___default().collectFormValues(registrationForm).password,
          passwordConfVal = validate_js__WEBPACK_IMPORTED_MODULE_0___default().collectFormValues(registrationForm).password_conf,
          _userVal2 = validate_js__WEBPACK_IMPORTED_MODULE_0___default().collectFormValues(registrationForm).user,
          checkboxErrorBox = document.querySelector(".feed-form__errorBox_sign-checkbox"),
          emailErrorBox = document.querySelector(".feed-form__errorBox_sign-email"),
          selectErrorBox = document.querySelector(".feed-form__errorBox_sign-select"),
          passwordErrorBox = document.querySelector(".feed-form__errorBox_sign-password"),
          passwordConfErrorBox = document.querySelector(".feed-form__errorBox_sign-password_conf"),
          _userErrorBox2 = document.querySelector(".feed-form__errorBox_sign-user"),
          _ErrorBox3 = registrationForm.querySelectorAll(".feed-form__errorBox"),
          _inputs3 = {
            checkbox: checkboxVal,
            select: selectVal,
            password: passwordVal,
            passwordConf: passwordConfVal,
            user: _userVal2,
            email: emailVal
          },
          _constraints3 = {
            checkbox: {
              presence: true,
              type: {
                type: function type(checked) {
                  return checked == true;
                },
                message: "^Ознакомьтесь с политикой конфиденциальности"
              }
            },
            select: {
              presence: true
            },
            user: {
              presence: true,
              length: {
                minimum: 3,
                maximum: 40,
                message: "^Введите от 3 до 40 символов"
              }
            },
            email: {
              presence: true,
              email: true
            },
            password: {
              presence: true,
              length: {
                minimum: 6,
                message: "^Пароль должен содержать не меньше 6 символов"
              }
            },
            passwordConf: {
              presence: true,
              equality: "password"
            }
          },
          _validationResult3 = validate_js__WEBPACK_IMPORTED_MODULE_0___default()(_inputs3, _constraints3);
        if (_validationResult3) {
          registrationForm.querySelectorAll("input").forEach(function (item) {
            return item.style.borderColor = "#ff5656";
          });
          _ErrorBox3.forEach(function (item) {
            return item.style.display = "block";
          });
          checkboxErrorBox.textContent = _validationResult3.checkbox;
          emailErrorBox.textContent = _validationResult3.email;
          passwordErrorBox.textContent = _validationResult3.password;
          passwordConfErrorBox.textContent = _validationResult3.passwordConf;
          _userErrorBox2.textContent = _validationResult3.user;
          selectErrorBox.textContent = _validationResult3.select;
        } else {
          registrationForm.querySelectorAll("input").forEach(function (item) {
            return item.style.borderColor = "#915c46";
          });
          _ErrorBox3.forEach(function (item) {
            return item.style.display = "none";
          });
          _ErrorBox3.forEach(function (item) {
            return item.textContent = "";
          });
          sendRequest();
        }
      }
      if (form.id == "autorization") {
        var _emailVal = validate_js__WEBPACK_IMPORTED_MODULE_0___default().collectFormValues(autorizationForm).email,
          _passwordVal = validate_js__WEBPACK_IMPORTED_MODULE_0___default().collectFormValues(autorizationForm).password,
          _checkboxVal = document.getElementById("autorization-checkbox").checked,
          _emailErrorBox = document.querySelector(".feed-form__errorBox_autorization-email"),
          _passwordErrorBox = document.querySelector(".feed-form__errorBox_autorization-password"),
          _checkboxErrorBox = document.querySelector(".feed-form__errorBox_autorization-checkbox"),
          _ErrorBox4 = autorizationForm.querySelectorAll(".feed-form__errorBox"),
          _inputs4 = {
            email: _emailVal,
            password: _passwordVal,
            checkbox: _checkboxVal
          },
          _constraints4 = {
            email: {
              email: true,
              presence: true
            },
            password: {
              presence: true,
              length: {
                minimum: 6,
                message: "^Пароль должен содержать не меньше 6 символов"
              }
            },
            checkbox: {
              presence: true,
              type: {
                type: function type(checked) {
                  return checked == true;
                },
                message: "^Ознакомьтесь с политикой конфиденциальности"
              }
            }
          },
          _validationResult4 = validate_js__WEBPACK_IMPORTED_MODULE_0___default()(_inputs4, _constraints4);
        if (_validationResult4) {
          autorizationForm.querySelectorAll("input").forEach(function (item) {
            return item.style.borderColor = "#ff5656";
          });
          _ErrorBox4.forEach(function (item) {
            return item.style.display = "block";
          });
          _emailErrorBox.textContent = _validationResult4.email;
          _passwordErrorBox.textContent = _validationResult4.password;
          _checkboxErrorBox.textContent = _validationResult4.checkbox;
        } else {
          autorizationForm.querySelectorAll("input").forEach(function (item) {
            return item.style.borderColor = "#915c46";
          });
          _ErrorBox4.forEach(function (item) {
            return item.style.display = "none";
          });
          _ErrorBox4.forEach(function (item) {
            return item.textContent = "";
          });
          sendRequest();
        }
      }
      if (form.id == "forget") {
        var blockPass = document.querySelector(".autorization__pass"),
          blockVerify = document.querySelector(".autorization__verify"),
          _emailVal2 = validate_js__WEBPACK_IMPORTED_MODULE_0___default().collectFormValues(forgetForm).email,
          _emailErrorBox2 = document.querySelector(".feed-form__errorBox_forget-email"),
          _ErrorBox5 = forgetForm.querySelector(".feed-form__errorBox"),
          _inputs5 = {
            email: _emailVal2
          },
          _constraints5 = {
            email: {
              email: true,
              presence: true
            }
          },
          _validationResult5 = validate_js__WEBPACK_IMPORTED_MODULE_0___default()(_inputs5, _constraints5);
        if (_validationResult5) {
          forgetForm.querySelector("input").style.borderColor = "#ff5656";
          _ErrorBox5.style.display = "block";
          _emailErrorBox2.textContent = _validationResult5.email;
        } else {
          forgetForm.querySelector("input").style.borderColor = "#915c46";
          _ErrorBox5.style.display = "none";
          _ErrorBox5.textContent = "";
          request.open("POST", url);
          request.send(formData);
          request.addEventListener("readystatechange", function () {
            if (request.readyState === 4 && request.status == 200) {
              blockPass.style.display = "none";
              blockVerify.style.display = "block";
              if (document.body.querySelector(".feed-form__messageBox")) {
                document.body.removeChild(messageBox);
              } else if (request.readyState < 4) {
                document.body.appendChild(messageBox);
                messageBox.innerHTML = message.loading;
              }
              document.body.addEventListener("click", function () {
                if (document.body.querySelector(".feed-form__messageBox")) {
                  document.body.removeChild(messageBox);
                }
              });
            }
          });
        }
      }
      if (form.id == "verify") {
        (validate_js__WEBPACK_IMPORTED_MODULE_0___default().options) = {
          format: "flat"
        };
        var numberVal1 = validate_js__WEBPACK_IMPORTED_MODULE_0___default().collectFormValues(verifyForm).code1,
          numberVal2 = validate_js__WEBPACK_IMPORTED_MODULE_0___default().collectFormValues(verifyForm).code2,
          numberVal3 = validate_js__WEBPACK_IMPORTED_MODULE_0___default().collectFormValues(verifyForm).code3,
          numberVal4 = validate_js__WEBPACK_IMPORTED_MODULE_0___default().collectFormValues(verifyForm).code4,
          _ErrorBox6 = verifyForm.querySelector(".feed-form__errorBox"),
          _inputs6 = {
            number1: numberVal1,
            number2: numberVal2,
            number3: numberVal3,
            number4: numberVal4
          },
          _constraints6 = {
            number1: {
              presence: true
            },
            number2: {
              presence: true
            },
            number3: {
              presence: true
            },
            number4: {
              presence: true
            }
          },
          _validationResult6 = validate_js__WEBPACK_IMPORTED_MODULE_0___default()(_inputs6, _constraints6);
        if (_validationResult6) {
          verifyForm.querySelectorAll("input").forEach(function (item) {
            return item.style.outlineColor = "#ff5656";
          });
          _ErrorBox6.style.display = "block";
          _ErrorBox6.textContent = _validationResult6;
        } else {
          verifyForm.querySelectorAll("input").forEach(function (item) {
            return item.style.outlineColor = "#915c46";
          });
          _ErrorBox6.style.display = "none";
          _ErrorBox6.textContent = "";
          sendRequest();
          setTimeout(toReplace, 3000);
        }
      }
      if (form.id == "connect-form") {
        var _userVal3 = validate_js__WEBPACK_IMPORTED_MODULE_0___default().collectFormValues(connectForm).user,
          _emailVal3 = validate_js__WEBPACK_IMPORTED_MODULE_0___default().collectFormValues(connectForm).email,
          _messageVal = validate_js__WEBPACK_IMPORTED_MODULE_0___default().collectFormValues(connectForm).message,
          _userErrorBox3 = connectForm.querySelector(".feed-form__errorBox_connect-user"),
          _emailErrorBox3 = connectForm.querySelector(".feed-form__errorBox_connect-email"),
          _messageErrorBox = connectForm.querySelector(".feed-form__errorBox_connect-message"),
          _ErrorBox7 = connectForm.querySelectorAll(".feed-form__errorBox"),
          _inputs7 = {
            user: _userVal3,
            email: _emailVal3,
            message: _messageVal
          },
          _constraints7 = {
            user: {
              presence: true,
              length: {
                minimum: 3,
                maximum: 40,
                message: "^Введите от 3 до 40 символов"
              }
            },
            email: {
              email: true,
              presence: true
            },
            message: {
              presence: true,
              length: {
                minimum: 10,
                maximum: 500,
                message: "^Введите от 10 до 500 символов"
              }
            }
          },
          _validationResult7 = validate_js__WEBPACK_IMPORTED_MODULE_0___default()(_inputs7, _constraints7);
        if (_validationResult7) {
          connectForm.querySelectorAll("input").forEach(function (item) {
            return item.style.borderColor = "#ff5656";
          });
          connectForm.querySelector("textarea").style.borderColor = "#ff5656";
          _ErrorBox7.forEach(function (item) {
            return item.style.display = "block";
          });
          _userErrorBox3.textContent = _validationResult7.user;
          _emailErrorBox3.textContent = _validationResult7.email;
          _messageErrorBox.textContent = _validationResult7.message;
        } else {
          connectForm.querySelectorAll("input").forEach(function (item) {
            return item.style.borderColor = "#915c46";
          });
          connectForm.querySelector("textarea").style.borderColor = "#915c46";
          _ErrorBox7.forEach(function (item) {
            return item.style.display = "none";
          });
          _ErrorBox7.forEach(function (item) {
            return item.textContent = "";
          });
          sendRequest();
        }
      }
    });
  };
  if (document.querySelector(".modal")) {
    submitForm(joinForm, "/php/telegram/telegram-join.php");
    submitForm(armorFirstForm, "/php/telegram/telegram-armorFirst.php");
    var ageInputReplaced = armorFirstForm.querySelector("input[name=age]");
    ageInputReplaced.addEventListener("input", function () {
      this.value = this.value.replace(/[^0-9]/g, "");
    });
  }
  if (document.querySelector(".reviews")) {
    submitForm(reviewsForm, "/php/telegram/telegram-reviews.php");
  }
  if (document.querySelector(".connect")) {
    submitForm(connectForm, "/php/telegram/telegram-connect.php");
  }
  if (document.querySelector(".autorization")) {
    submitForm(registrationForm, "/php/telegram/telegram-registration.php");
    submitForm(autorizationForm, "/php/telegram/telegram-autorization.php");
    submitForm(forgetForm, "/php/telegram/telegram-forget.php");
    submitForm(verifyForm, "/php/telegram/telegram-verify.php");
    var codeInputReplaced = verifyForm.querySelectorAll(".feed-form__input_number");
    codeInputReplaced.forEach(function (item) {
      item.addEventListener("input", function () {
        item.value = item.value.replace(/[^0-9]/g, "");
      });
    });
  }
});

/***/ }),

/***/ "./src/blocks/modules/footer/footer.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/footer/footer.js ***!
  \*********************************************/
/***/ (() => {

window.addEventListener("DOMContentLoaded", function () {});

/***/ }),

/***/ "./src/blocks/modules/header/header.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/header/header.js ***!
  \*********************************************/
/***/ (() => {

window.addEventListener("DOMContentLoaded", function () {
  "use striсt";

  if (document.querySelector(".header")) {
    var hamburger = document.querySelectorAll(".header__hamburger"),
      nav = document.querySelector(".header__nav_m-visible"),
      navHamburger = nav.querySelector(".header__hamburger");
    var navShow = function navShow() {
      hamburger.forEach(function (item) {
        item.addEventListener("click", function () {
          navHamburger.classList.toggle("header__hamburger_active");
          nav.classList.toggle("header__nav_active");
          document.body.classList.toggle("body_noscroll");
          if (nav.classList.contains("header__nav_active")) {
            document.body.classList.remove("body_eclipse");
          } else if (document.body.querySelector(".action") || document.body.querySelector(".connect")) {
            document.body.classList.add("body_eclipse");
          }
        });
      });
    };
    navShow();
  }
});

/***/ }),

/***/ "./src/blocks/modules/join/join.js":
/*!*****************************************!*\
  !*** ./src/blocks/modules/join/join.js ***!
  \*****************************************/
/***/ (() => {

window.addEventListener("DOMContentLoaded", function () {});

/***/ }),

/***/ "./src/blocks/modules/modal/modal.js":
/*!*******************************************!*\
  !*** ./src/blocks/modules/modal/modal.js ***!
  \*******************************************/
/***/ (() => {

window.addEventListener("DOMContentLoaded", function () {
  "use strict";
});

/***/ }),

/***/ "./src/blocks/modules/partners/partners.js":
/*!*************************************************!*\
  !*** ./src/blocks/modules/partners/partners.js ***!
  \*************************************************/
/***/ (() => {

window.addEventListener("DOMContentLoaded", function () {});

/***/ }),

/***/ "./src/blocks/modules/promo/promo.js":
/*!*******************************************!*\
  !*** ./src/blocks/modules/promo/promo.js ***!
  \*******************************************/
/***/ (() => {

window.addEventListener("DOMContentLoaded", function () {
  "use strict";

  if (document.querySelector(".promo")) {
    var overlay = document.querySelector(".join-modal__overlay"),
      close = document.querySelector(".join-modal__close"),
      onloadModal = document.querySelector(".promo__overlay"),
      confirmBtn = document.querySelector(".promo-modal__yes"),
      deniedBtn = document.querySelector(".promo-modal__no"),
      modalWindow = document.querySelector(".join-modal");
    window.addEventListener("load", function () {
      var currentCounter = sessionStorage.getItem("currentCounter");
      if (!currentCounter || currentCounter == "false") {
        toAgeConfirm();
      }
    });
    var toAgeConfirm = function toAgeConfirm() {
      onloadModal.classList.add("promo__overlay_active");
      document.body.classList.add("body_blur");
      confirmBtn.addEventListener("click", function () {
        sessionStorage.setItem("currentCounter", "true");
        document.body.classList.remove("body_blur");
        onloadModal.classList.add("animation__type__fadeOut_modal");
        onloadModal.addEventListener("animationend", function (e) {
          if (e.target.classList.contains("animation__type__fadeOut_modal")) {
            e.target.classList.remove("promo__overlay_active");
          }
        });
      });
      deniedBtn.addEventListener("click", function () {
        location.replace("404.html");
        sessionStorage.setItem("currentCounter", "false");
      });
    };
    var showModal = function showModal(btnClass) {
      var btn = document.querySelectorAll(btnClass);
      btn.forEach(function (item) {
        item.addEventListener("click", function () {
          overlay.style.display = "block";
          modalWindow.classList.add("animation__type__fade_modal");
          close.classList.add("animation__type__fade");
          overlay.classList.remove("animation__type__fadeOut_modal");
          close.classList.remove("animation__type__fadeOut_modal");
        });
      });
    };
    showModal(".promo__btn");
    showModal(".join__btn");
    var closeByOverclick = function closeByOverclick(fadeItem) {
      overlay.addEventListener("click", function (e) {
        var curentModal = e.target.closest(".modal");
        if (!curentModal) {
          fadeItem.classList.remove("animation__type__fade_modal");
          close.classList.remove("animation__type__fade");
          fadeItem.classList.add("animation__type__fadeOut_modal");
          fadeItem.addEventListener("animationend", function (e) {
            if (e.target.classList.contains("animation__type__fadeOut_modal")) {
              overlay.style.display = "none";
            }
          });
        }
      });
    };
    closeByOverclick(overlay);
    /* closeByOverclick(close); */

    /* let closeModal = function closeModal(fadeItem) {
        close.addEventListener("click", function () {
            fadeItem.classList.remove("animation__type__fade_modal");
            fadeItem.classList.add("animation__type__fadeOut_modal");
            fadeItem.addEventListener("animationend", (e) => {
                if(e.target.classList.contains("animation__type__fadeOut_modal")) {
                    overlay.style.display = "none";
                }
            });
            
        });
    };
     closeModal(close);
    closeModal(overlay); */
  }
});

/***/ }),

/***/ "./src/blocks/modules/questions/questions.js":
/*!***************************************************!*\
  !*** ./src/blocks/modules/questions/questions.js ***!
  \***************************************************/
/***/ (() => {

window.addEventListener("DOMContentLoaded", function () {
  "use strict";

  if (document.querySelector(".questions")) {
    var questionBox = document.querySelectorAll(".questions__box"),
      content = document.querySelectorAll(".questions__content"),
      plus = document.querySelectorAll(".questions__plus"),
      screenWidth = document.documentElement.clientWidth;
    var showContent = function showContent(a) {
      if (questionBox[a].classList.contains("questions__box_active")) {
        content[a].classList.add("questions__content_active");
        plus[a].classList.add("questions__plus_active");
      } else {
        content[a].classList.remove("questions__content_active");
        plus[a].classList.remove("questions__plus_active");
      }
      if (screenWidth > 1200) {
        if (questionBox[a].classList.contains("questions__box_active")) {
          questionBox[a].style.maxHeight = content[a].clientHeight + 103 + "px";
        } else {
          questionBox[a].style.maxHeight = 103 + "px";
        }
      }
      if (screenWidth < 1201) {
        if (questionBox[a].classList.contains("questions__box_active")) {
          questionBox[a].style.maxHeight = content[a].clientHeight + 97 + "px";
        } else {
          questionBox[a].style.maxHeight = 97 + "px";
        }
      }
      if (screenWidth < 993) {
        if (questionBox[a].classList.contains("questions__box_active")) {
          questionBox[a].style.maxHeight = content[a].clientHeight + 92 + "px";
        } else {
          questionBox[a].style.maxHeight = 92 + "px";
        }
      }
      if (screenWidth < 577) {
        if (questionBox[a].classList.contains("questions__box_active")) {
          questionBox[a].style.maxHeight = content[a].clientHeight + 74 + "px";
        } else {
          questionBox[a].style.maxHeight = 74 + "px";
        }
      }
    };
    var toClickItem = function toClickItem(clickItem) {
      clickItem.forEach(function (item) {
        item.addEventListener("click", function () {
          for (var i = 0; i < clickItem.length; i++) {
            clickItem[i].classList.remove("questions__box_active");
            this.classList.add("questions__box_active");
            showContent(i);
          }
        });
      });
    };
    toClickItem(questionBox);
  }
});

/***/ }),

/***/ "./src/blocks/modules/reviews/reviews.js":
/*!***********************************************!*\
  !*** ./src/blocks/modules/reviews/reviews.js ***!
  \***********************************************/
/***/ (() => {

window.addEventListener("DOMContentLoaded", function () {
  "use strict";

  if (document.body.querySelector(".reviews")) {
    var sliderSet = function sliderSet() {
      var currentIndex = 1,
        slide = document.querySelectorAll(".reviews__slide"),
        prev = document.querySelector(".reviews__arrowLeft"),
        next = document.querySelector(".reviews__arrowRight");
      function slideShow(n) {
        if (n > slide.length) {
          currentIndex = 1;
        }
        if (n < 1) {
          currentIndex = slide.length;
        }
        for (var i = 0; i < slide.length; i++) {
          slide[i].style.display = "none";
          slide[currentIndex - 1].style.display = "flex";
        }
      }
      slideShow(currentIndex);
      function slidePlus(n) {
        slideShow(currentIndex = currentIndex + n);
      }
      function slideMinus(n) {
        slideShow(currentIndex = currentIndex - n);
      }
      next.addEventListener("click", function () {
        slidePlus(1);
      });
      prev.addEventListener("click", function () {
        slideMinus(1);
      });
    };
    sliderSet();
  }
});

/***/ }),

/***/ "./src/blocks/modules/rules/rules.js":
/*!*******************************************!*\
  !*** ./src/blocks/modules/rules/rules.js ***!
  \*******************************************/
/***/ (() => {

window.addEventListener("DOMContentLoaded", function () {
  "use strict";

  if (document.body.querySelector(".rules")) {
    var rulesSection = document.querySelector(".rules"),
      rulesList = rulesSection.querySelector(".rules__list"),
      rulesContinue = rulesSection.querySelector(".rules__continue");
    rulesList.style.display = "none";
    rulesContinue.addEventListener("click", function () {
      this.style.display = "none";
      rulesList.classList.add("animation__type__fade");
      rulesList.style.display = "block";
    });
  }
});

/***/ }),

/***/ "./src/blocks/modules/sign/sign.js":
/*!*****************************************!*\
  !*** ./src/blocks/modules/sign/sign.js ***!
  \*****************************************/
/***/ (() => {

window.addEventListener("DOMContentLoaded", function () {});

/***/ }),

/***/ "./src/blocks/modules/vip/vip.js":
/*!***************************************!*\
  !*** ./src/blocks/modules/vip/vip.js ***!
  \***************************************/
/***/ (() => {

window.addEventListener("DOMContentLoaded", function () {
  "use strict";

  if (document.querySelector(".vip")) {
    var overlay = document.querySelector(".join-modal__overlay"),
      close = document.querySelector(".join-modal__close"),
      modalWindow = document.querySelector(".join-modal");
    var showModal = function showModal(btnClass) {
      var btn = document.querySelectorAll(btnClass);
      btn.forEach(function (item) {
        item.addEventListener("click", function () {
          overlay.style.display = "block";
          modalWindow.classList.add("animation__type__fade_modal");
          close.classList.add("animation__type__fade");
          overlay.classList.remove("animation__type__fadeOut_modal");
          close.classList.remove("animation__type__fadeOut_modal");
        });
      });
    };
    showModal(".vip__btn");
    var closeModal = function closeModal() {
      close.addEventListener("click", function () {
        overlay.style.display = "none";
      });
    };
    closeModal();
    var closeByOverclick = function closeByOverclick(fadeItem) {
      overlay.addEventListener("click", function (e) {
        var curentModal = e.target.closest(".modal");
        if (!curentModal) {
          fadeItem.classList.remove("animation__type__fade_modal");
          close.classList.remove("animation__type__fade");
          fadeItem.classList.add("animation__type__fadeOut_modal");
          fadeItem.addEventListener("animationend", function (e) {
            if (e.target.classList.contains("animation__type__fadeOut_modal")) {
              overlay.style.display = "none";
            }
          });
        }
      });
    };
    closeByOverclick(overlay);
  }
});

/***/ }),

/***/ "./src/js/import/components.js":
/*!*************************************!*\
  !*** ./src/js/import/components.js ***!
  \*************************************/
/***/ (() => {



/***/ }),

/***/ "./src/js/import/modules.js":
/*!**********************************!*\
  !*** ./src/js/import/modules.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %modules%/header/header */ "./src/blocks/modules/header/header.js");
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_header_header__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_action_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! %modules%/action/action */ "./src/blocks/modules/action/action.js");
/* harmony import */ var _modules_action_action__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_action_action__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modules_join_join__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! %modules%/join/join */ "./src/blocks/modules/join/join.js");
/* harmony import */ var _modules_join_join__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modules_join_join__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _modules_autorization_autorization__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! %modules%/autorization/autorization */ "./src/blocks/modules/autorization/autorization.js");
/* harmony import */ var _modules_autorization_autorization__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_modules_autorization_autorization__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _modules_bangles_bangles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! %modules%/bangles/bangles */ "./src/blocks/modules/bangles/bangles.js");
/* harmony import */ var _modules_bangles_bangles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_modules_bangles_bangles__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _modules_benefit_benefit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! %modules%/benefit/benefit */ "./src/blocks/modules/benefit/benefit.js");
/* harmony import */ var _modules_benefit_benefit__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_modules_benefit_benefit__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _modules_connect_connect__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! %modules%/connect/connect */ "./src/blocks/modules/connect/connect.js");
/* harmony import */ var _modules_connect_connect__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_modules_connect_connect__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _modules_events_events__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! %modules%/events/events */ "./src/blocks/modules/events/events.js");
/* harmony import */ var _modules_events_events__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_modules_events_events__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _modules_partners_partners__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! %modules%/partners/partners */ "./src/blocks/modules/partners/partners.js");
/* harmony import */ var _modules_partners_partners__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_modules_partners_partners__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _modules_promo_promo__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! %modules%/promo/promo */ "./src/blocks/modules/promo/promo.js");
/* harmony import */ var _modules_promo_promo__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_modules_promo_promo__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _modules_questions_questions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! %modules%/questions/questions */ "./src/blocks/modules/questions/questions.js");
/* harmony import */ var _modules_questions_questions__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_modules_questions_questions__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _modules_reviews_reviews__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! %modules%/reviews/reviews */ "./src/blocks/modules/reviews/reviews.js");
/* harmony import */ var _modules_reviews_reviews__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_modules_reviews_reviews__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _modules_sign_sign__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! %modules%/sign/sign */ "./src/blocks/modules/sign/sign.js");
/* harmony import */ var _modules_sign_sign__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_modules_sign_sign__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _modules_vip_vip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! %modules%/vip/vip */ "./src/blocks/modules/vip/vip.js");
/* harmony import */ var _modules_vip_vip__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_modules_vip_vip__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _modules_rules_rules__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! %modules%/rules/rules */ "./src/blocks/modules/rules/rules.js");
/* harmony import */ var _modules_rules_rules__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_modules_rules_rules__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _modules_modal_modal__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! %modules%/modal/modal */ "./src/blocks/modules/modal/modal.js");
/* harmony import */ var _modules_modal_modal__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_modules_modal_modal__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! %modules%/footer/footer */ "./src/blocks/modules/footer/footer.js");
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_modules_footer_footer__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _modules_feed_form_feed_form__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! %modules%/feed-form/feed-form */ "./src/blocks/modules/feed-form/feed-form.js");



















/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _import_modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./import/modules */ "./src/js/import/modules.js");
/* harmony import */ var _import_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./import/components */ "./src/js/import/components.js");
/* harmony import */ var _import_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_import_components__WEBPACK_IMPORTED_MODULE_1__);



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/amd define */
/******/ 	(() => {
/******/ 		__webpack_require__.amdD = function () {
/******/ 			throw new Error('define cannot be used indirect');
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkgulp_scss_starter"] = self["webpackChunkgulp_scss_starter"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendor"], () => (__webpack_require__("./src/js/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map