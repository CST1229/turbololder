// Version 2.212
// Firefox recommended.
// Trigger sprites by RobTop.
(function(Scratch) {
	"use strict";
	
	const exId = "cst1229scratch22";
	
	// recycled from my adm implementation
	function getBlockArgs(source) {
		try {
			const args = {};
			for (const input of source.inputList) {
				for (const field of input.fieldRow) {
					if (field.isCurrentlyEditable()) args[field.name] = field.getValue();
				}
				if (!input.connection) continue;
				const block = input.connection.targetConnection.sourceBlock_;
				if (!block || !block.isShadow()) continue;
				for (const input2 of block.inputList) {
					for (const field2 of input2.fieldRow) {
						if (field2.isCurrentlyEditable()) args[input.name] = field2.getValue();
					}
				}
			}
			return args;
		} catch(e) {return {}};
	}
	
	class Scratch22Ext {
		getInfo() {
			return {
				id: exId,
				name: "Scratch 2.2",
				color1: "#88ff33",
				color2: "#66aa22",
				color3: "#000000",
				blocks: [
					{
						opcode: "turnRight",
						blockType: Scratch.BlockType.COMMAND,
						text: "[IMG]",
						arguments: {
							IMG: {
								type: Scratch.ArgumentType.IMAGE,
								dataURI: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIIAAACCCAYAAACKAxD9AAAAAXNSR0IArs4c6QAABCVJREFUeJzt3T1OG0EchvGHj4IGmZaKjtZIHCCbE3CEkAaJCm5gc4JAFyrICSBdyvUBkKFFQiINpHMsuUhHCmPE2usvvDvzn533J22BxYbBfrJe5J0dEBERERERERERERERERERESnWku8BLOgbsA9sAH+BY+DHDPsdve4Tu0vgt+9BLKIGtIGXnO1iwn5bQGfMfrFuXyY+04ZNimCw1cfsezVlvxi3DrC1Mvk5N6cGpMDOlO/7A7RyHv8OrBU8ptCtAY+rvkcxh9wI6vU6SZJwdnY2y7+ROS9oNBqFDS4kaZrSamX+nwRzvpT7dlCv1186nc5Lo9EYPtyNe4Uz3xervOdrudSXrxhjjwRpmrKxEUzMplkPQRE4YjkEReCQ1RAUgWMWQ1AEHlgLQRF4YikEReCRlRAUgWcWQlAEBvgOQREY4TMERWCIrxAUgTE+QlAEBrkOQREY5fJ6BHMRLC2FfslmcVwdEaxEkLr6QYG5dhGClQigf5WzZB0Dd2W/NViKAOAOSIDm69eJ6wEY8fi63QJnUO45grUIBlrAZ18/3Kqy3hqsRiBjlBGCIghQ0SEogkAVGYIiCFhRIViLoIn/qWQhbBf0X7tCQrAWgcxuH7iGxUNQBOFLgL1FQlAE1bHz0U9dKhHBzc1N5uvd3V1PI3Gr2WxycnKSeegjR4RKRCBZ84agCCpqnhAUQYXNGoIiqLhZQlAEEZgWgiKIxKQQFEFExoWgCCKTF4IiiNBwCIogUu9DUAQRG4SgCCI3COEaRRC1VeATQ9f3b29vc3p6ysPDg5dB+TL8aWRVPT8/jzy2TE4E5+fnrK+vOxqWWDDy5+PT01NuMVJty/SnPb3p9XocHBxwf3/vaUjiwyrwk34MbyeLvV6Pw8ND0jRlZ2fa0gjhivUKpc3NzZHHBm8NCUNHhm63S5Ik3N7ejuwk1TMIoYtiiNr7k0XFELHhvxoUQ6TyPn1UDBEadz2CYojMpCuUFENEpl2zqBgiMctVzIohArPOa1AMFTfPTCfFUGHzzn1UDBX1kdnQikEyctdrrtVqL+122/dax9rm2xZaG1pHhupY+KbciiF8x8BdEXdVUwzheaQ/feGU15tyF8nbOUPOOUKj6F+u6oq886qODAEr+l7MiiFQZdydXTEEqKz1GhRDYMpc02kQw2XmQcVgUtmLe3WBrygG81wt96cYjHO5EqxiMMz1ksCKwSgfi4QrBoN8hACKwRxfIYBiMMVnCKAYzPAdAigGEyyEAIrBOyshgGLwylIIoBi8sRYCKAYvLIYAisE5qyGAYnDKcgigGJyxHgIoBidCCAEUgwy5IGfexN7enuY1RGgkhpxNIURiWgx1f0MT167Ij+DI56BCteJ7AAv4BawB/+hP6nykpEmdIiIiIiIiIiIiIiIiIiIiIjK//44TZXYA0BiGAAAAAElFTkSuQmCC"
							},
						}
					},
					{
						opcode: "turnLeft",
						blockType: Scratch.BlockType.COMMAND,
						text: "[IMG]",
						arguments: {
							IMG: {
								type: Scratch.ArgumentType.IMAGE,
								dataURI: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIIAAACCCAYAAACKAxD9AAAAAXNSR0IArs4c6QAAA/1JREFUeJzt3T1OI2cAgOEXlBLJaU2zqWhtiQPEN2BvsJsGSpIT2DdIUiHR7N5glROs04OAliYlpVlB7xS2BRiDf2a+v/H7SJ8AD2M+Dy+jsTQzgCRJkiRJkiRJkiRJUr12Uk+gYKfAx2dfXwMD4EeS2SiJU2C8YHxLOSnF1WFxBLPxJd3UFFOf90MoMobd1BMo3dHREa1Wa/7hzxQWgyFU1O12GQ6HxcdgCDVoQgyGUJPSYzCEGpUcgyHUrNQYDCGAEmMwhEBKi8EQAiopBkMIrJQYDCGCEmIwhEhyj8EQIso5BkOILNcYDCGBHGMwhERyi8EQEsopBkNILJcYDCEDOcRgCJlYIYZXC+pkCBlZEsOQgDEYQmbeiaFLwBgMIUMpYjCETMWOwRAyFjOG5yH8CXwH/mP5lTzbPAbrbeJqYsUwC+EU+B3oAb/U8cSqT4wYdplc1PlX1SdSWKFj2OXlNf7KWOgYXlzd2+/3x9vi4uLixSjF1dXVuNVqLTp+udo0Bt81FCjEnsEQClV3DIZQsDpjMITC1RWDITRAHTEYQkNUjcEQGqRKDIbQMJvGYAgNtEkMhtBQ68ZgCA22TgyG0HCrxmAIW2CFGPhpfsnd3R2Xl5fhZ5ehpr/us7Mzjo+PeXx8fP5wFzhyj7BFDg4OOD8/Z29vb35R1xC2TLvdZn9//9XjhrBFHh4eODk54fb2dn7R8NUxQrvd5vDwMM7MEps/Jmjy676/v6fX6y2MAPjXPcIWmEVwc3Mzv+ia6TmrhtBwSyLoMf1nZIbQYKtGAIbQWOtEAIbQSOtGAIbQOJtEAIbQKJtGAIbQGFUiAENohKoRgCEUr44IwBCKVlcEYAjFqjMCMIQi1R3BzCr//dzxxoh9P4nRaDTudDq13hsBJnuE601XVlyh9gQwCeEfpicwKl8hI4CnY4SPwNcqT6RwQkcATyH8AH4DdhxLx2DtrVxBjAjAdw1ZixUBGEK2YkYAhpCl2BGAIWQnRQTgTbnnx/fp+HWzzVlNqgjg6drH2U25t11v+nHI5JrAV7+RUFJGAN6U+z3RtknqCMCbcr+nF+OH5BABLDhY7Pf7jMfjrRyx5RIB+K4hmZwiAENIIrcIwBCiyzECMISoco0ADCGanCMAQ4gi9wjAEIIrIQIwhKBKiQAMIZiSIgBDCKK0CMAQaldiBGAItSo1AjCE2pQcARhCLUqPABbcnX04HDIYDBJMpUxNiGDmlPTnCuY4Rm9sr/4K61a6IDWVD0xedOoNn9v49sb26ixZr8gIZj6RfsPnNEZM/kDe8uWN9YqNYOfZ5x+Az4nmkZN74O8Vvu8TkxNcf56u8xX4I9y0JEmSJEmSJEmSJEmSyvI/nK/hqeEGqkUAAAAASUVORK5CYII="
							},
						}
					},
					{
						opcode: "rotate",
						blockType: Scratch.BlockType.COMMAND,
						text: "[IMG] [DEGREES]",
						arguments: {
							IMG: {
								type: Scratch.ArgumentType.IMAGE,
								dataURI: "data:image/png;base64,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"
							},
							DEGREES: {
								type: Scratch.ArgumentType.NUMBER,
								defaultValue: "0",
							},
						}
					},
					{
						opcode: "move",
						blockType: Scratch.BlockType.COMMAND,
						text: "[IMG] [X] [Y]",
						arguments: {
							IMG: {
								type: Scratch.ArgumentType.IMAGE,
								dataURI: "data:image/png;base64,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"
							},
							X: {
								type: Scratch.ArgumentType.NUMBER,
								defaultValue: "0",
							},
							Y: {
								type: Scratch.ArgumentType.NUMBER,
								defaultValue: "10",
							},
						}
					},
					{
						opcode: "scale",
						blockType: Scratch.BlockType.COMMAND,
						text: "[IMG] [SCALE]",
						arguments: {
							IMG: {
								type: Scratch.ArgumentType.IMAGE,
								dataURI: "data:image/png;base64,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"
							},
							SCALE: {
								type: Scratch.ArgumentType.NUMBER,
								defaultValue: "2",
							},
						}
					},
				],
			};
		}
		
		turnLeft(args) {}
		turnRight(args) {}
		rotate(args) {}
	}
	
	if (!window.scaffolding) {
		let interval;
		function patchSB() {
			if (window?.ScratchBlocks) {
				const oldClassify = ScratchBlocks.BlockSvg.prototype.renderClassify_;
				ScratchBlocks.BlockSvg.prototype.renderClassify_ = function() {
					oldClassify.call(this);
					if (!this.type.startsWith(exId)) return;
					const args = getBlockArgs(this);
					let style = "";
					for (const arg in args) {
						const value = args[arg].toString().replaceAll(/["';\n\r]/gi, "");
						if (!isNaN(value)) {
							style += "--arg-" + arg.toString() + ": " + value + ';';
						} else {
							style += "--arg-" + arg.toString() + ": " + '"' + value + '";';
						}
					}
					this.svgGroup_.setAttribute("style", style);
					this.svgGroup_.setAttribute("data-opcode", this.type.toString());
				}
				
				const style = document.createElement("style");
				style.textContent = `
					.blocklyDraggable[data-opcode="${exId}_turnRight"] > .blocklyDraggable {
						rotate: 90deg;
					}
					.blocklyDraggable[data-opcode="${exId}_turnLeft"] > .blocklyDraggable {
						rotate: -90deg;
						translate: 48px 48px;
					}
					.blocklyDraggable[data-opcode="${exId}_rotate"] > .blocklyDraggable {
						rotate: calc(var(--arg-DEGREES, 0) * 1deg);
						translate: 0px 40px;
					}
					.blocklyDraggable[data-opcode="${exId}_move"] > .blocklyDraggable {
						translate: calc(var(--arg-X, 0) * 4.8px) calc(var(--arg-Y, 0) * 4.8px);
					}
					.blocklyDraggable[data-opcode="${exId}_scale"] > .blocklyDraggable {
						scale: var(--arg-SCALE, 1);
						translate: 0 48px;
					}
					.blocklyDraggable[data-opcode*="${exId}"] > g > image {
						transform: scale(1.5) translate(-3px, -4px);
					}
					.blocklyDraggable[data-opcode*="${exId}"] > .blocklyBlockBackground {
						opacity: 0;
					}
				`;
				document.documentElement.appendChild(style);
				clearInterval(interval);
			}
		}
		interval = setInterval(patchSB, 50);
		patchSB();
	}
	
	Scratch.extensions.register(new Scratch22Ext());
})(Scratch);