module.exports = {
	appId: "threema-work-for-desktop",
	productName: "Threema Work For Desktop",
	artifactName: "Threema-Work-For-Desktop-setup-${version}.${ext}",
	copyright: `Copyright © 2021-${new Date().getFullYear()} GeekCorner`,
	directories: {
		buildResources: "build-assets",
		output: "build-binaries"
	},
	win: {
		target: [{
			target: "nsis",
			arch: ["x64", "ia32", "arm64"]
		},
		{
			target: "portable",
			arch: ["x64", "ia32", "arm64"],
		}]
	},
	nsis: {
		oneClick: false,
		perMachine: false,
		allowElevation: true,
		allowToChangeInstallationDirectory: true,
		license: "./build-assets/license.txt",
		displayLanguageSelector: true,

	},
	msi: {
		artifactName: "Threema-Work-For-Desktop-setup-${version}.${ext}",
		createDesktopShortcut: true,
		createStartMenuShortcut: true,
		shortcutName: "Threema Work For Desktop"
	},
	portable: {
		artifactName: "Threema-Work-For-Desktop-portable-${arch}-${version}.${ext}",

	},
	mac: {
		target: [{
			target: "dmg",
			arch: ["universal"],
		}],
		category: "public.app-category.social-networking"
	},
	dmg: {
		artifactName: "Threema-Work-For-Desktop-mac-universal-${version}.${ext}",
		contents: [
			{
				x: 370,
				y: 450
			},
			{
				x: 666,
				y: 450,
				type: "link",
				path: "/Applications"
			}
		],
		window: {
			height: 785,
			width:1080
		}

	},

	linux: {
		target: ["AppImage"],
		maintainer: "GeekCorner",
		vendor: "GeekCorner",
		synopsis: "Threema Work For Desktop",
		description: "Threema Work For Desktop",
		category: "Office"
	},
	appImage: {
		artifactName: "Threema-Work-For-Desktop-linux-${version}.${ext}",
	},
	compression: "maximum",
	files: [
		"!{docs,.github,build-binaries,src,CONTRIBUTORS.MD,.all-contributorsrc,.eslintignore,.eslintrc.json,.gitignore,.nvmrc,.travis.yml,build.js,tsconfig.json,yarn.lock,package-log.json,pnpm-lock.yaml}"
	],
	asar: true
}