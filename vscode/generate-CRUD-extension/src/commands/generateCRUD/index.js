const vscode = require('vscode');
const fs = require('fs')

module.exports = async function(params) {
    // Ask name
    const name = await vscode.window.showInputBox({placeHolder: 'Enter name of the CRUD'});
   
    if (!name) {
        vscode.window.showWarningMessage('Name is required.');
        return false;
    }

    // Generate CRUD
    const dir = params.path + '/' + name;

    if (fs.existsSync(dir)) {
        vscode.window.showWarningMessage('Directory already exists.');
        return false;
    }

    fs.mkdirSync(dir);
    fs.mkdirSync(dir + '/create');
    fs.mkdirSync(dir + '/read');
    fs.mkdirSync(dir + '/update');
    fs.mkdirSync(dir + '/delete');

    const data = `export default {}`
    await fs.writeFileSync(dir + '/index.js', data);
    await fs.writeFileSync(dir + '/create/index.js', data);
    await fs.writeFileSync(dir + '/read/index.js', data);
    await fs.writeFileSync(dir + '/update/index.js', data);
    await fs.writeFileSync(dir + '/delete/index.js', data);

    vscode.window.showInformationMessage('CRUD generated successfully...');
    return true;
}