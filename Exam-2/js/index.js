let elAddButton = document.querySelector(".add-button");
let tBofy = document.querySelector(".tbody");

let elModalWrapper = document.querySelector(".modal-wrapper");
let elModal = document.querySelector(".modal-wrapper");

let products = [];

elAddButton.addEventListener("click", function () {
  elModalWrapper.classList.add("open-modal");
  elModal.innerHTML = `
   <form>
    <label>
        <div class="w-[80%] bg-white mx-auto">
            <img class="rounded-[50px] w-[40%] mx-auto" src="images/choosephoto.svg" alt="" width="70" height="70"/>
            <span class="text-[17px] text-slate-500 t-center">Choose the image</span>
        </div>
        <input class="visually-hidden" type="file"/>
    </label>
    <input class="p-2 w-[49%] rounded-md" type="text" placeholder="Enter product name"/>
   </form>`;
});

elModalWrapper.addEventListener("click", function (evt) {
  if (evt.target.id == "modal-wrapper") {
    elModalWrapper.classList.remove("open-modal");
  }
});













