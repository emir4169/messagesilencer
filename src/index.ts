import { Injector, common } from "replugged";
const inject = new Injector();

export function start(): void {
  inject.before(common.messages, "sendMessage", (args) => {
    if (!args[1].content.startsWith("@silent")) {
      args[1].content = `@silent ${args[1].content}`;
    }
    return args;
  });
}

export function stop(): void {
  inject.uninjectAll();
}
