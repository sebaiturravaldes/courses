const vscode = require('vscode');
/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
	console.log('Congratulations, your extension "my-first-extension" is now active!');

	let disposable = vscode.commands.registerCommand('my-first-extension.helloWorld', function () {
		vscode.window.showInformationMessage('Hola, Nunca es tarde!');
	});

	context.subscriptions.push(disposable);
}

function deactivate() {}

module.exports = {
	activate,
	deactivate
}
