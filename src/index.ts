import { createApp } from "vue";
import MyButton from "./button";
import NoahUI from "./entry";

createApp({
  template: `
    <div>
      <MyButton> 普通按钮 </MyButton>
    </div>
  `,
})
  .use(NoahUI)
  .mount("#app");
