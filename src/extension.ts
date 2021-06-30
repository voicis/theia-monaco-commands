import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    vscode.commands.registerCommand("test.goToFileStart", function () {
      const editor = vscode.window.activeTextEditor;
      if (editor) {
        const locations = [
          new vscode.Location(
            editor.document.uri,
            new vscode.Range(0, 0, 0, 0)
          ),
          new vscode.Location(
            editor.document.uri,
            new vscode.Range(0, 1, 0, 1)
          ),
        ];
        vscode.commands.executeCommand(
          "editor.action.goToLocations",
          locations[0].uri,
          locations[0].range.start,
          locations,
          "peek"
        );
      }
    })
  );
}

export function deactivate() {}
