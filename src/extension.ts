import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	let disposable = vscode.commands.registerCommand('code-coverage', async () => {		
		const coverageFilePath: vscode.Uri[] = await vscode.workspace.findFiles('*coverage/lcov-report/index.html');
		if(coverageFilePath?.length){
			vscode.env.openExternal(vscode.Uri.file(coverageFilePath[0].path));
		} else {
			vscode.window.showInformationMessage('Coverage file not found ! Please run the code coverage first.');
		}
	});
	context.subscriptions.push(disposable);
}

export function deactivate() {}
