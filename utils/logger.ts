import chalk from "chalk";
export enum LoggerType {
  INFO,
  ERROR,
  SUCCESS,
}
export class Logger {
  public log(logType: LoggerType, msg: string) {
    switch (logType) {
      case LoggerType.INFO:
        console.log(chalk.blueBright(msg));
      case LoggerType.SUCCESS:
        console.log(chalk.greenBright(msg));
      case LoggerType.ERROR:
        console.log(chalk.redBright(msg));
    }
  }
}
