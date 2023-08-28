const e = (() => {
  const c = () => {
    const t = document.querySelector("#header-hamburger"), n = document.querySelector(".header nav");
    t == null || t.addEventListener("click", () => {
      t == null || t.classList.toggle("active"), n == null || n.classList.toggle("active");
    });
  };
  return {
    setHandleEvent: function() {
      try {
        c();
      } catch {
      }
    }
  };
})(), o = () => {
  e.setHandleEvent();
};
window.addEventListener("load", () => {
  o();
});
//# sourceMappingURL=mainscript.js.map
