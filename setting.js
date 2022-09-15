const fs = require('fs')
const chalk = require('chalk')

// Other
global.owner = ['5493865362492']
global.premium = ['5493865362492']
global.sponsor = 'sin patrocinadores :('
global.packname = 'Akame-Md'
global.footer = '© 2022 Hywd'
global.author = 'Dueño : Hywd\nGithub : @Hywd'
global.prefa = ['#']
global.act = {
		wait: 'por favor espere un momento, procesando datos...',
		den:'*Lo siento, aún no te has registrado...*\n\n*.reg* <nombre>\n*Para Registrarse/Iniciar sesión*',
		proc:'Cargando por favor espere..',
		error:'Error :(',
		success:'Exito!',
		repiar:'¡Comando en mantenimiento !',
		botadm:'¡Hazme administrador primero!',
		admin:'Solo para Adminis',
		done:'Hecho!',
		gc:'Solo para grupo',
		owner:'Solo para mi propietario'
}

global.thumb = fs.readFileSync('./lib/thumb.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})