import { en_US as localeData } from './strings'

const sidebar_common = {
	text: localeData.other,
	items: [
		{ text: localeData.pages["faq"], link: `/faq` },
		{ text: localeData.pages["about"], link: `/about` }
	]
}

const themeConfig = {
	langMenuLabel: localeData.langMenuLabel,
	darkModeSwitchLabel: localeData.darkModeSwitchLabel,
	darkModeSwitchTitle: localeData.darkModeSwitchTitle,
	lightModeSwitchTitle: localeData.lightModeSwitchTitle,
	sidebarMenuLabel: localeData.sidebarMenuLabel,
	returnToTopLabel: localeData.returnToTopLabel,

	nav: [
		{ text: localeData.guide, link: `/user_guide/getting_started` },
		{ text: localeData.pages["homebrew"], link: `/homebrew/` },
		{ text: localeData.pages["extras"], link: `/extras/` },
		{ text: localeData.pages["faq"], link: `/faq` },
		{ text: localeData.pages["about"], link: `/about` }
	],
	sidebar: {
		[`/extras/`]: [
			{
				text: localeData.pages["extras"],
				link: `/extras/`,
				items: [
					{ text: localeData.pages["extras/blocking_nintendo"], link: `/extras/blocking_nintendo` },
					{ text: localeData.pages["extras/nandrestore"], link: `/extras/nandrestore` },
					{ text: localeData.pages["extras/autorcm"], link: `/extras/autorcm` },
					{ text: localeData.pages["extras/game_modding"], link: `/extras/game_modding` },
					{ text: localeData.pages["extras/adding_udev"], link: `/extras/adding_udev` },
					{ text: localeData.pages["extras/showing_file_extensions"], link: `/extras/showing_file_extensions` },
					{ text: localeData.pages["extras/alternate_bootsetups"], link: `/extras/alternate_bootsetups` },
					{ text: localeData.pages["extras/rcm_injectors"], link: `/extras/rcm_injectors` },
					{ text: localeData.pages["extras/updating"], link: `/extras/updating` },
					{ text: localeData.pages["extras/transfer_sd"], link: `/extras/transfer_sd` },
					{ text: localeData.pages["extras/installing_android"], link: `/extras/installing_android` },
					{ text: localeData.pages["extras/installing_linux"], link: `/extras/installing_linux` },
					{ text: localeData.pages["extras/glossary"], link: `/extras/glossary` }
				]
			},
			sidebar_common
		],
		[`/homebrew/`]: [
			{
				text: localeData.pages["homebrew"],
				link: `/homebrew/`,
				items: [
					{ text: localeData.pages["homebrew/jksv"], link: `/homebrew/jksv` },
					{ text: localeData.pages["homebrew/goldleaf"], link: `/homebrew/goldleaf` },
					{ text: localeData.pages["homebrew/ftpd"], link: `/homebrew/ftpd` },
					{ text: localeData.pages["homebrew/nxtheme-installer"], link: `/homebrew/nxtheme-installer` },
					{ text: localeData.pages["homebrew/nx-shell"], link: `/homebrew/nx-shell` },
					{ text: localeData.pages["homebrew/edizon"], link: `/homebrew/edizon` },
					{ text: localeData.pages["homebrew/simplemodmanager"], link: `/homebrew/simplemodmanager` },
					{ text: localeData.pages["homebrew/tesla-menu"], link: `/homebrew/tesla-menu` },
					{ text: localeData.pages["homebrew/mission-control"], link: `/homebrew/mission-control` },
					{ text: localeData.pages["homebrew/sys-con"], link: `/homebrew/sys-con` },
					{ text: localeData.pages["homebrew/sys-botbase"], link: `/homebrew/sys-botbase` },
					{ text: localeData.pages["homebrew/sysdvr"], link: `/homebrew/sysdvr` },
					{ text: localeData.pages["homebrew/sys-clk"], link: `/homebrew/sys-clk` },
					{ text: localeData.pages["homebrew/ldn_mitm"], link: `/homebrew/ldn_mitm` }
				]
			},
			sidebar_common
		],
		[`/user_guide/all/partitioning_sd_syscfw`]: [
			{
				text: localeData.guide,
				items: [
					{ text: localeData.pages["user_guide/getting_started"], link: `/user_guide/getting_started` },
					{
						text: localeData.rcm,
						items: [
							{ text: localeData.pages["user_guide/rcm"], link: `/user_guide/rcm/` },
							{ text: localeData.pages["user_guide/rcm/entering_rcm"], link: `/user_guide/rcm/entering_rcm` },
							{ text: localeData.pages["user_guide/rcm/sending_payload"], link: `/user_guide/rcm/sending_payload` }
						]
					},
					{
						text: localeData.modchip,
						items: [
							{ text: localeData.pages["user_guide/modchip"], link: `/user_guide/modchip/` },
							{ text: localeData.pages["user_guide/modchip/preparing_hekate"], link: `/user_guide/modchip/preparing_hekate` }
						]
					},
					{ text: localeData.pages["user_guide/all/cfw_environment"], link: `/user_guide/all/cfw_environment` },
					{ text: localeData.pages["user_guide/all/partitioning_sd_syscfw"], link: `/user_guide/all/partitioning_sd_syscfw` },
					{ text: localeData.pages["user_guide/all/sd_preparation"], link: `/user_guide/all/sd_preparation` },
					{ text: localeData.pages["user_guide/all/making_essential_backups"], link: `/user_guide/all/making_essential_backups` },
					{ text: localeData.pages["user_guide/all/launching_cfw"], link: `/user_guide/all/launching_cfw` }
				]
			},
			sidebar_common
		],
		[`/user_guide/all/partitioning_sd`]: [
			{
				text: localeData.guide,
				items: [
					{ text: localeData.pages["user_guide/getting_started"], link: `/user_guide/getting_started` },
					{
						text: localeData.rcm,
						items: [
							{ text: localeData.pages["user_guide/rcm"], link: `/user_guide/rcm/` },
							{ text: localeData.pages["user_guide/rcm/entering_rcm"], link: `/user_guide/rcm/entering_rcm` },
							{ text: localeData.pages["user_guide/rcm/sending_payload"], link: `/user_guide/rcm/sending_payload` }
						]
					},
					{
						text: localeData.modchip,
						items: [
							{ text: localeData.pages["user_guide/modchip"], link: `/user_guide/modchip/` },
							{ text: localeData.pages["user_guide/modchip/preparing_hekate"], link: `/user_guide/modchip/preparing_hekate` }
						]
					},
					{ text: localeData.pages["user_guide/all/cfw_environment"], link: `/user_guide/all/cfw_environment` },
					{ text: localeData.pages["user_guide/all/partitioning_sd"], link: `/user_guide/all/partitioning_sd` },
					{ text: localeData.pages["user_guide/all/sd_preparation"], link: `/user_guide/all/sd_preparation` },
					{ text: localeData.pages["user_guide/all/making_essential_backups"], link: `/user_guide/all/making_essential_backups` },
					{ text: localeData.pages["user_guide/all/launching_cfw"], link: `/user_guide/all/launching_cfw` }
				]
			},
			sidebar_common
		],
		[`/user_guide/modchip/`]: [
			{
				text: localeData.guide,
				items: [
					{ text: localeData.pages["user_guide/getting_started"], link: `/user_guide/getting_started` },
					{ text: localeData.pages["user_guide/modchip"], link: `/user_guide/modchip/` },
					{ text: localeData.pages["user_guide/modchip/preparing_hekate"], link: `/user_guide/modchip/preparing_hekate` },
					{ text: localeData.pages["user_guide/all/cfw_environment"], link: `/user_guide/all/cfw_environment` },
					{
						text: localeData.pages["multiple-options"],
						items: [
							{ text: localeData.pages["user_guide/all/partitioning_sd"], link: `/user_guide/all/partitioning_sd` },
							{ text: localeData.pages["user_guide/all/partitioning_sd_syscfw"], link: `/user_guide/all/partitioning_sd_syscfw` },
						]
					},
					{ text: localeData.pages["user_guide/all/sd_preparation"], link: `/user_guide/all/sd_preparation` },
					{ text: localeData.pages["user_guide/all/making_essential_backups"], link: `/user_guide/all/making_essential_backups` },
					{ text: localeData.pages["user_guide/all/launching_cfw"], link: `/user_guide/all/launching_cfw` }
				]
			},
			sidebar_common
		],
		[`/user_guide/rcm/`]: [
			{
				text: localeData.guide,
				items: [
					{ text: localeData.pages["user_guide/getting_started"], link: `/user_guide/getting_started` },
					{ text: localeData.pages["user_guide/rcm"], link: `/user_guide/rcm/` },
					{ text: localeData.pages["user_guide/rcm/entering_rcm"], link: `/user_guide/rcm/entering_rcm` },
					{ text: localeData.pages["user_guide/rcm/sending_payload"], link: `/user_guide/rcm/sending_payload` },
					{ text: localeData.pages["user_guide/all/cfw_environment"], link: `/user_guide/all/cfw_environment` },
					{
						text: localeData.pages["multiple-options"],
						items: [
							{ text: localeData.pages["user_guide/all/partitioning_sd"], link: `/user_guide/all/partitioning_sd` },
							{ text: localeData.pages["user_guide/all/partitioning_sd_syscfw"], link: `/user_guide/all/partitioning_sd_syscfw` },
						]
					},
					{ text: localeData.pages["user_guide/all/sd_preparation"], link: `/user_guide/all/sd_preparation` },
					{ text: localeData.pages["user_guide/all/making_essential_backups"], link: `/user_guide/all/making_essential_backups` },
					{ text: localeData.pages["user_guide/all/launching_cfw"], link: `/user_guide/all/launching_cfw` }
				]
			},
			sidebar_common
		],
		/*
		 	The `/` path needs to be at the bottom as a catch all! If it is placed anywhere above,
			it will select the first matching one and not parse the rest!
		*/
		[`/`]:  [
			{
				text: localeData.guide,
				items: [
					{ text: localeData.pages["user_guide/getting_started"], link: `/user_guide/getting_started` },
					{
						text: localeData.rcm,
						items: [
							{ text: localeData.pages["user_guide/rcm"], link: `/user_guide/rcm/` },
							{ text: localeData.pages["user_guide/rcm/entering_rcm"], link: `/user_guide/rcm/entering_rcm` },
							{ text: localeData.pages["user_guide/rcm/sending_payload"], link: `/user_guide/rcm/sending_payload` }
						]
					},
					{
						text: localeData.modchip,
						items: [
							{ text: localeData.pages["user_guide/modchip"], link: `/user_guide/modchip/` },
							{ text: localeData.pages["user_guide/modchip/preparing_hekate"], link: `/user_guide/modchip/preparing_hekate` }
						]
					},
					{ text: localeData.pages["user_guide/all/cfw_environment"], link: `/user_guide/all/cfw_environment` },
					{
						text: localeData.pages["multiple-options"],
						items: [
							{ text: localeData.pages["user_guide/all/partitioning_sd"], link: `/user_guide/all/partitioning_sd` },
							{ text: localeData.pages["user_guide/all/partitioning_sd_syscfw"], link: `/user_guide/all/partitioning_sd_syscfw` },
						]
					},
					{ text: localeData.pages["user_guide/all/sd_preparation"], link: `/user_guide/all/sd_preparation` },
					{ text: localeData.pages["user_guide/all/making_essential_backups"], link: `/user_guide/all/making_essential_backups` },
					{ text: localeData.pages["user_guide/all/launching_cfw"], link: `/user_guide/all/launching_cfw` }
				]
			},
			sidebar_common
		],
	},
	footer: {
		copyright: 'Copyright © 2025 Nintendo Homebrew',
		items: [
			{ text: localeData.pages["about"], link: `/about` }
		]
	}
};

export default {
	lang: "en",
	label: localeData.language,
    title: localeData.title,
    description: localeData.description,
    themeConfig: themeConfig
}
