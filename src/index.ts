import { Injector, common } from "replugged";
const inject = new Injector();

export function start(): void {
  inject.before(common.messages, "sendMessage", (args) => {
    args[1].content = `@silent ${args[1].content}`;
    return args;
  });
}

export function stop(): void {
  inject.uninjectAll();
}
