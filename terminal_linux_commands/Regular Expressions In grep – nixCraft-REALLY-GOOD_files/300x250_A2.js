(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.Dana = function() {
	this.initialize(img.Dana);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,275,250);


(lib.Wave = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.loopCount = 1;
	}
	this.frame_200 = function() {
		if(this.loopCount < 3){
		this.loopCount++;
		this.gotoAndPlay(2);
		}else{
		this.stop();
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(200).call(this.frame_200).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Atn0zIWFAEQBRChBRDUQCjGnAFD7QAEC5gjDUQgQBjg8EWQgzDvgSCYQgbDiAPDVI4TAIg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Atm0zIWJAFQBPChBQDTQCgGnAFD7QAEC5giDUQgPBkg7EVQgxDvgRCYQgaDiAPDVI4YAIg");
	this.shape_1.setTransform(-0.1,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Atl0zIWNAFQBOChBPDUQCdGnAED6QAEC5ghDUQgOBkg5EVQgwDvgQCYQgZDiAPDVI4dAIg");
	this.shape_2.setTransform(-0.2,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Atk0zIWSAFQBMChBNDUQCaGnAED6QAEC5gfDVQgOBjg3EVQguDvgQCYQgYDiAPDVI4iAIg");
	this.shape_3.setTransform(-0.3,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Atk0zIWXAGQBLCgBLDUQCXGnAED6QAEC5gfDVQgNBkg1EUQgsDvgQCYQgXDiAPDVI4nAIg");
	this.shape_4.setTransform(-0.3,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Atj0zIWcAGQBJChBKDTQCTGnAFD6QAEC6geDUQgNBkgzEVQgrDvgPCXQgWDiAPDVI4sAIg");
	this.shape_5.setTransform(-0.4,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ati0zIWgAGQBIChBIDUQCQGmAFD7QAEC5gdDUQgMBlgyEUQgpDvgOCXQgVDiAPDVI4xAIg");
	this.shape_6.setTransform(-0.5,0);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ath0zIWlAHQBGCgBGDUQCNGmAFD7QAEC5gcDUQgLBlgwEUQgoDvgNCXQgUDiAPDVI42AIg");
	this.shape_7.setTransform(-0.6,0);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ath0zIWqAHQBEChBFDTQCKGmAFD7QAEC5gbDUQgLBlguEUQgmDvgNCXQgSDiAPDVI48AIg");
	this.shape_8.setTransform(-0.6,0);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Atg0zIWuAHQBDChBEDTQCHGmAED7QAEC5gZDUQgLBmgsETQglDvgMCXQgRDiAPDVI5BAIg");
	this.shape_9.setTransform(-0.7,0);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Atf0zIWyAIQBCCgBCDUQCEGmAED6QAEC5gZDUQgJBmgrETQgjDvgLCXQgRDiAPDVI5FAIg");
	this.shape_10.setTransform(-0.8,0);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Ate0zIW3AIQBAChBADTQCBGmAED6QAEC6gXDUQgJBlgpETQghDwgLCWQgQDiAPDVI5KAIg");
	this.shape_11.setTransform(-0.9,0);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("Atd0zIW8AIQA+ChA/DTQB9GmAFD6QAEC6gXDUQgIBmgoESQgfDwgKCWQgPDiAPDVI5PAIg");
	this.shape_12.setTransform(-1,0);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("Atd0zIXBAJQA8CgA+DTQB6GmAFD7QAEC5gWDUQgIBmglESQgeDwgKCWQgNDiAPDVI5VAIg");
	this.shape_13.setTransform(-1,0);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("Atc0zIXFAJQA7CgA8DUQB4GlAED7QAEC5gUDUQgIBngkERQgcDwgJCWQgMDiAPDVI5aAIg");
	this.shape_14.setTransform(-1.1,0);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("Atb0zIXJAJQA6ChA6DTQB1GlAED7QAEC5gTDUQgHBngjERQgaDwgICWQgMDiAPDVI5eAIg");
	this.shape_15.setTransform(-1.2,0);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("Ata0zIXOAKQA4CgA5DTQBxGlAED7QAEC5gSDUQgGBnghERQgZDwgHCWQgLDiAPDVI5jAIg");
	this.shape_16.setTransform(-1.3,0);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AtZ0zIXTAKQA2CgA3DTQBuGmAFD6QAEC6gSDTQgFBogfEQQgXDxgHCVQgKDiAPDVI5oAIg");
	this.shape_17.setTransform(-1.4,0);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AtZ0zIXYALQA1CgA1DTQBrGlAFD6QAEC6gRDTQgFBogdEQQgVDxgHCVQgIDiAPDVI5uAIg");
	this.shape_18.setTransform(-1.4,0);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AtY0zIXcALQA0CgA0DTQBoGlAED6QAEC6gPDTQgFBpgbEPQgUDxgGCVQgHDiAPDVI5zAIg");
	this.shape_19.setTransform(-1.5,0);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AtX0zIXhALQAyCgAyDTQBlGlAED6QAEC6gODUQgEBogaEPQgSDxgFCVQgGDiAPDVI54AIg");
	this.shape_20.setTransform(-1.6,0);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AtW0zIXlAMQAwCgAxDSQBiGlAED7QAEC5gNDUQgDBogYEPQgRDxgECVQgGDiAPDVI58AIg");
	this.shape_21.setTransform(-1.7,0);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AtW0zIXqAMQAvCgAwDTQBeGkAFD7QADC5gMDUQgDBpgWEOQgPDygECUQgDDiAODVI6CAIg");
	this.shape_22.setTransform(-1.7,0);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AtV0zIXvAMQAtCgAuDTQBbGkAFD7QAEC6gLDTQgDBpgUEPQgODxgDCUQgDDiAPDVI6HAIg");
	this.shape_23.setTransform(-1.8,0);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AtU0zIXzANQAsCgAsDSQBYGlAFD6QAEC6gKDTQgCBpgTEPQgLDxgDCUQgCDiAPDVI6MAIg");
	this.shape_24.setTransform(-1.9,0);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AtT0zIX4ANQAqCgAqDSQBVGlAFD6QAEC6gJDTQgBBqgREOQgKDxgCCUQgBDhAPDVI6RAJg");
	this.shape_25.setTransform(-2,0);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AtS0zIX8ANQApCgApDTQBSGkAED6QAEC6gIDTQAABqgQEOQgIDxgBCUQAADhAPDVI6WAJg");
	this.shape_26.setTransform(-2.1,0);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AtS0zIYBAOQAnCfAoDTQBPGkAED6QAEC6gHDTQAABrgOENQgGDxgBCUQABDhAPDVI6bAJg");
	this.shape_27.setTransform(-2.1,0);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AtR0zIYGAOQAlCgAmDSQBMGkAED7QAEC5gFDUQAABqgMENQgFDyAACTQACDhAPDVI6gAJg");
	this.shape_28.setTransform(-2.2,0);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AtS0zIYKAOQAkCgAlDSQBIGkAED7QAEC6gEDTQABBqgLENQgCDyAACTQADDhAPDVI6lAJg");
	this.shape_29.setTransform(-2.1,0);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AtV0zIYQAPQAiCfAiDTQBGGjAED7QAFC6gFDTQADBrgJEMQgCDyACCTQAEDhAPDVI6rAJg");
	this.shape_30.setTransform(-1.8,0);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AtX0zIYUAPQAgCgAiDSQBCGjAFD7QADC6gCDTQACBrgHEMQAADyACCTQAFDhAPDVI6vAJg");
	this.shape_31.setTransform(-1.6,0);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("Ata0zIYZAPQAeCgAhDSQA/GkAED6QAEC6gCDTQAEBsgGELQACDyADCTQAGDhAPDVI61AJg");
	this.shape_32.setTransform(-1.3,0);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("Atc0zIYdAQQAdCfAeDSQA9GkAED6QAEC6AADTQADBsgDELQADDyADCTQAHDhAPDVI65AJg");
	this.shape_33.setTransform(-1.1,0);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("Atf0zIYiAQQAcCgAdDRQA5GkAED6QAEC6AADTQAFBsgDELIAJGFQAJDhAPDVI6/AJg");
	this.shape_34.setTransform(-0.8,0);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("Ath0zIYmAQQAbCgAbDSQA1GjAFD7QAEC6ACDSQAEBtAAEKIALGFQAJDhAPDVI7DAJg");
	this.shape_35.setTransform(-0.6,0);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("Atk0zIYrARQAZCfAZDSQAzGjAFD7QAEC6ACDSQAFBtACEKIANGFQALDhAPDVI7JAJg");
	this.shape_36.setTransform(-0.3,0);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("Atm0zIYvARQAXCfAYDSQAwGjAED7IAIGNQAGBsADEKIAQGFQALDhAPDVI7NAJg");
	this.shape_37.setTransform(-0.1,0);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("Atp0zIY0ARQAWCgAWDRQAtGjAED7IAJGNQAGBtAFEJIASGFQANDhAPDVI7TAJg");
	this.shape_38.setTransform(0.2,0);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("Atr0zIY4ASQAUCfAVDSQAqGjAED6IAKGNQAHBtAHEJIAUGFQANDhAPDVI7XAJg");
	this.shape_39.setTransform(0.4,0);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("Atu0zIY9ASQATCfATDSQAnGjAED6QAEC6AHDTQAHBuAJEIIAWGFIAeG2I7dAJg");
	this.shape_40.setTransform(0.7,0);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("Atw0zIZBATQARCfASDRQAjGjAFD6QAEC7AIDSQAIBuAKEJQAQDzAJCRIAeG2I7hAJg");
	this.shape_41.setTransform(0.9,0);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("Atz0zIZGATQAQCfAQDRQAgGjAFD6QAEC7AJDSQAIBuAMEJQASDzAJCRIAgG2I7nAJg");
	this.shape_42.setTransform(1.2,0);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("At10zIZLATQANCfAPDSQAdGiAFD7QAEC6AJDSQAKBvANEIQAUDzAKCRQARDhAPDVI7rAJg");
	this.shape_43.setTransform(1.4,0);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("At40zIZQAUQAMCfANDRQAaGiAFD7QAEC6AKDSQAKBvAQEIQAVDzAKCRQATDhAPDVI7xAJg");
	this.shape_44.setTransform(1.7,0);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("At60zIZUAUQALCfALDRQAXGiAFD7QAEC6ALDSQALBwAREHQAXDzALCRQATDhAPDVI71AJg");
	this.shape_45.setTransform(1.9,0);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("At90zIZZAUQAJCfAKDRQAUGjAED6QAEC6ANDTQALBvATEHQAZD0ALCQQAVDhAPDVI77AJg");
	this.shape_46.setTransform(2.2,0);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("At/0zIZdAVQAICeAIDSQARGiAED6QAEC7AODSQAMBvAUEHQAaD0ANCQQAVDhAPDVI7/AJg");
	this.shape_47.setTransform(2.4,0);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AuC0zIZiAVIANFwQAOGiAED6QAEC7APDSQAMBwAWEGQAcD0ANCQQAXDhAPDVI8FAJg");
	this.shape_48.setTransform(2.7,0);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AuE0zIZmAVIAKFwQALGiAED6QAEC7AQDSQANBwAYEGQAdD0AOCQQAXDhAPDVI8JAJg");
	this.shape_49.setTransform(2.9,0);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AuH0zIZrAWIAGFvIAMKdQAEC6ASDSQANBwAZEGQAfD0AOCPQAaDiAPDVI8PAJg");
	this.shape_50.setTransform(3.2,0);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AuK0zIZwAWIAEFwQAEGhAFD7QAEC6ARDSQAOBxAcEFQAhD1AOCOQAaDiAQDVI8VAJg");
	this.shape_51.setTransform(3.5,0);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AuM0zIZ0AWIAAFwQACGhAFD7QADC6AUDSQAOBxAdEFQAiD1AQCOQAbDiAPDVI8ZAJg");
	this.shape_52.setTransform(3.7,0);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AuP0zIZ5AXIgDFvQgBGhAED7QAFC7AUDRQAOByAfEEQAkD1AQCOQAcDiAQDVI8fAJg");
	this.shape_53.setTransform(4,0);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AuR0zIZ9AXQgDCfgCDQQgGGiAFD6QAEC7AVDSQAQBxAhEEQAlD1ARCOQAdDiAPDVI8jAJg");
	this.shape_54.setTransform(4.2,0);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AuU0zIaCAXIgJFwQgHGhAED6QAEC7AXDSQAQBxAhEEQAoD1ARCOQAeDiAQDVI8pAJg");
	this.shape_55.setTransform(4.5,0);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AuW0zIaGAYQgGCegFDRQgMGhAFD6QAEC7AXDSIA1F1QApD1ASCOQAfDiAPDVI8tAJg");
	this.shape_56.setTransform(4.7,0);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AuZ0zIaMAYQgICfgHDQQgOGhAED7QAEC6AYDSIA3F1QAqD2ATCNQAhDiAPDVI8zAJg");
	this.shape_57.setTransform(5,0);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("Aub0zIaQAYQgKCfgJDQQgQGhAED7QAEC6AZDSIA6F1QArD2AUCNQAhDiAPDUI83AKg");
	this.shape_58.setTransform(5.2,0);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("Aue0zIaVAZQgLCegLDRQgUGgAED7QAFC7AaDRIA7F2QAvD1ATCNQAjDiAODUI88AKg");
	this.shape_59.setTransform(5.5,0);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("Aug0zIaZAZQgMCegMDRQgYGgAFD7QAEC7AbDRIA+F2QAvD1AUCNQAkDiAPDUI9BAKg");
	this.shape_60.setTransform(5.7,0);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("Auj0zIaeAaQgOCegODQQgaGhAFD6QADC7AdDRIBAF2QAxD1AVCNQAlDiAODUI9GAKg");
	this.shape_61.setTransform(6,0);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("Aul0zIaiAaQgQCegODQQgeGhAED6QAFC7AdDRIBCF2QAzD1AVCNQAmDiAPDUI9LAKg");
	this.shape_62.setTransform(6.2,0);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("Auo0zIanAaQgRCegQDRQghGgAED6QAEC7AeDSIBFF1QA1D2AWCMQAnDiAODUI9QAKg");
	this.shape_63.setTransform(6.5,0);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("Auq0zIarAbQgTCegSDQQgkGgAFD6QAEC7AfDSIBHF1QA2D2AXCMQAoDiAPDUI9VAKg");
	this.shape_64.setTransform(6.7,0);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("Aut0zIawAbQgUCegUDQQgnGgAFD7QAEC7AgDRQAWB0A0EBQA3D2AYCMQApDiAPDUI9bAKg");
	this.shape_65.setTransform(7,0);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("Auv0zIa1AbQgWCegWDQQgqGgAFD7QAEC7AhDRQAXB1A1EAQA5D2AYCMQAqDiAPDUI9fAKg");
	this.shape_66.setTransform(7.2,0);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("Auy0zIa6AcQgYCegXDPQgtGgAED7QAEC7AjDRQAXB1A3EAQA7D2AZCMQArDiAPDUI9lAKg");
	this.shape_67.setTransform(7.5,0);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("Au00zIa+AcQgZCegZDQQgwGgAED6QAEC7AkDRQAYB1A4EAQA9D2AZCMQAsDiAPDUI9pAKg");
	this.shape_68.setTransform(7.7,0);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("Au30zIbDAcQgbCegaDQQgzGgAED6QAEC7AlDRQAYB2A6D/QA/D3AaCLQAtDiAPDUI9vAKg");
	this.shape_69.setTransform(8,0);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("Au50zIbHAdQgcCdgcDQQg2GgAED6QAEC7AmDRQAZB2A8D/QA/D3AbCLQAuDiAPDUI9zAKg");
	this.shape_70.setTransform(8.2,0);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("Au80zIbMAdQgeCegdDPQg5GgAED6QAEC8AnDQQAZB3A+D+QBBD3AcCLQAvDiAPDUI95AKg");
	this.shape_71.setTransform(8.5,0);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("Au+0zIbQAdQgfCegfDQQg9GfAFD7QAEC7AoDRQAaB2A/D+QBDD3AcCLQAwDiAPDUI99AKg");
	this.shape_72.setTransform(8.7,0);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AvB0zIbVAeQghCdggDQQhAGfAFD7QAEC7ApDRQAaB2BBD+QBFD3AdCLQAxDiAPDUI+DAKg");
	this.shape_73.setTransform(9,0);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AvD0zIbZAeQgiCegiDPQhDGfAFD7QAEC7AqDRQAbB3BCD9QBHD3AdCLQAyDiAPDUI+HAKg");
	this.shape_74.setTransform(9.2,0);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AvG0zIbfAeQgkCegkDPQhGGfAFD7QAEC7ArDRQAbB3BFD9QBID4AeCKQAzDiAPDUI+NAKg");
	this.shape_75.setTransform(9.5,0);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AvI0zIbjAfQgmCdglDQQhJGfAED6QAEC7AsDRQAdB3BGD9QBKD4AeCKQA0DiAPDUI+RAKg");
	this.shape_76.setTransform(9.7,0);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AvL0zIboAfQgnCegnDPQhMGfAED6QAEC8AtDQQAdB4BID9QBLD3AgCKQA1DiAPDUI+XAKg");
	this.shape_77.setTransform(10,0);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AvO0zIbsAfQgoCegoDPQhPGfAED6QAEC8AuDQQAeB4BJD9QBND3AgCKQA2DiAQDUI+dAKg");
	this.shape_78.setTransform(10.3,0);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AvQ0zIbxAgQgqCdgqDPQhTGfAFD7QAEC7AvDQQAeB5BMD8QBOD3AhCKQA3DiAPDUI+hAKg");
	this.shape_79.setTransform(10.5,0);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AvT0zIb2AgQgsCdgrDQQhWGeAED7QAFC7AwDRQAfB4BMD8QBRD3AhCKQA5DiAPDUI+nAKg");
	this.shape_80.setTransform(10.8,0);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AvV0zIb6AgQguCegsDPQhZGeAFD7QAEC7AxDRQAfB4BPD8QBRD4AjCJQA5DiAPDUI+rAKg");
	this.shape_81.setTransform(11,0);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AvY0zIb/AhQgvCdguDPQhcGeAED7QAEC7AzDRQAfB5BRD7QBUD4AiCJQA7DiAPDUI+xAKg");
	this.shape_82.setTransform(11.3,0);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("Ava0zIcDAhQgwCdgwDPQhfGfAED6QAFC8AzDQQAgB5BSD7QBVD4AkCJQA7DiAPDUI+1AKg");
	this.shape_83.setTransform(11.5,0);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("Avd0zIcIAiQgyCdgxDPQhjGeAFD6QAEC8A0DQQAhB5BVD7QBWD4AkCJQA9DiAODUI+6AKg");
	this.shape_84.setTransform(11.8,0);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("Avf0zIcMAiQgzCdgzDPQhmGeAFD6QAEC8A1DQQAiB6BWD6QBYD4AlCJQA9DiAPDUI+/AKg");
	this.shape_85.setTransform(12,0);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("Avi0zIcRAiQg1Cdg0DPQhoGeAED6QAEC8A3DQQAhB6BXD6QBbD5AlCIQA/DiAODUI/EAKg");
	this.shape_86.setTransform(12.3,0);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("Avk0zIcVAjQg2Cdg2DOQhrGeAED7QAEC7A3DQQAjB7BZD5QBcD5AlCIQBADiAPDUI/JAKg");
	this.shape_87.setTransform(12.5,0);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("Avn0zIcbAjQg5Cdg3DPQhvGdAFD7QAEC7A5DQQAjB7BaD5QBdD5AnCIQBBDiAODUI/OAKg");
	this.shape_88.setTransform(12.8,0);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("Avp0zIcfAjQg6Cdg5DPQhyGdAED7QAFC8A5DQQAkB6BcD5QBfD5AnCIQBCDiAPDUI/TAKg");
	this.shape_89.setTransform(13,0);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFFFF").s().p("Avs0zIckAkQg8Cdg6DOQh1GeAFD6QAEC8A6DQQAlB7BdD4QBhD5AoCIQBDDiAODUI/YAKg");
	this.shape_90.setTransform(13.3,0);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("Avu0zIcoAkQg9Cdg8DOQh4GeAED6QAEC8A8DQQAlB7BgD4QBiD5AoCIQBEDiAPDTI/dALg");
	this.shape_91.setTransform(13.5,0);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFFFF").s().p("Avx0zIctAkQg/Cdg9DPQh7GdAED6QAEC8A9DQQAlB8BiD3QBkD6ApCHQBFDiAPDTI/jALg");
	this.shape_92.setTransform(13.8,0);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("Avz0zIcxAlQhACcg/DPQh/GdAFD6QAEC8A+DQQAmB8BjD3QBmD6ApCHQBGDiAPDTI/nALg");
	this.shape_93.setTransform(14,0);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFFFFF").s().p("Av20zIc2AlQhCCdhADOQiCGdAFD7QAEC7A/DQQAmB8BlD3QBnD6ArCHQBHDiAPDTI/tALg");
	this.shape_94.setTransform(14.3,0);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFFFFF").s().p("Av40zIc6AlQhDCdhCDOQiFGdAFD7QAEC8BADPQAnB9BmD3QBpD5ArCHQBIDiAPDTI/xALg");
	this.shape_95.setTransform(14.5,0);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FFFFFF").s().p("Av70zIc/AmQhECchEDPQiIGcAFD7QAEC8BADPQAoB9BpD3QBqD5AsCHQBJDiAPDTI/3ALg");
	this.shape_96.setTransform(14.8,0);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFFFFF").s().p("Av90zIdEAmQhHCdhFDOQiLGcAED7QAEC8BCDQQApB8BqD3QBsD5AsCHQBKDiAPDTI/7ALg");
	this.shape_97.setTransform(15,0);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FFFFFF").s().p("AwA0zIdJAmQhICdhHDOQiOGdAED6QAEC8BDDQQApB9BsD2QBuD6AtCGQBLDiAPDTMggBAALg");
	this.shape_98.setTransform(15.3,0);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFFFFF").s().p("AwC0zIdNAnQhKCchIDOQiRGdAED6QAEC8BEDQQAqB9BtD2QBwD6AtCGQBMDiAPDTMggFAALg");
	this.shape_99.setTransform(15.5,0);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FFFFFF").s().p("Av70zIdAAmQhFCchEDPQiIGcAFD7QAEC8BADPQAoB9BpD3QBqD5AsCHQBJDiAPDTI/3ALg");
	this.shape_100.setTransform(14.8,0);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FFFFFF").s().p("Av50zIc8AlQhECdhDDOQiEGdAFD7QAEC8A/DPQAnB9BnD3QBpD5AsCHQBHDiAPDTI/yALg");
	this.shape_101.setTransform(14.6,0);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FFFFFF").s().p("Av20zIc3AlQhDCdhBDOQiBGdAED7QAFC7A/DQQAmB8BlD3QBoD6AqCHQBHDiAPDTI/tALg");
	this.shape_102.setTransform(14.3,0);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FFFFFF").s().p("Av00zIczAlQhBCcg/DPQh/GdAED6QAEC8A+DQQAnB8BjD3QBmD6AqCHQBGDiAODTI/oALg");
	this.shape_103.setTransform(14.1,0);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FFFFFF").s().p("Avx0zIcuAkQg/Cdg+DPQh8GdAFD6QADC8A+DQQAlB8BiD3QBkD6ApCHQBFDiAPDTI/jALg");
	this.shape_104.setTransform(13.8,0);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FFFFFF").s().p("Avv0zIcqAkQg+Cdg8DOQh5GeAED6QAFC8A8DQQAkB7BgD4QBjD5ApCIQBEDiAODTI/eALg");
	this.shape_105.setTransform(13.6,0);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FFFFFF").s().p("Avs0zIclAkQg8Cdg7DOQh1GeAED6QAEC8A6DQQAlB7BfD4QBhD5AoCIQBCDiAPDUI/ZAKg");
	this.shape_106.setTransform(13.3,0);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FFFFFF").s().p("Avq0zIchAjQg7Cdg5DPQhzGdAFD7QAEC8A6DQQAkB6BcD5QBgD5AnCIQBCDiAPDUI/VAKg");
	this.shape_107.setTransform(13.1,0);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FFFFFF").s().p("Avn0zIccAjQg5Cdg4DPQhvGdAED7QAEC7A4DQQAkB7BbD5QBeD5AmCIQBBDiAPDUI/PAKg");
	this.shape_108.setTransform(12.8,0);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FFFFFF").s().p("Avl0zIcXAjQg3Cdg2DOQhtGeAFD7QAEC7A4DQQAiB7BaD5QBcD5AmCIQBADiAPDUI/LAKg");
	this.shape_109.setTransform(12.6,0);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#FFFFFF").s().p("Avi0zIcSAiQg2Cdg0DPQhqGeAFD7QAEC7A3DQQAiB6BXD6QBbD5AlCIQA/DiAPDUI/FAKg");
	this.shape_110.setTransform(12.3,0);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FFFFFF").s().p("Avg0zIcOAiQg0CdgzDPQhnGeAFD6QAEC8A2DQQAhB6BWD6QBZD4AlCJQA+DiAPDUI/BAKg");
	this.shape_111.setTransform(12.1,0);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#FFFFFF").s().p("Avd0zIcJAiQgzCdgxDPQhjGeAED6QAEC8A1DQQAhB6BUD6QBXD4AlCJQA8DiAPDUI+7AKg");
	this.shape_112.setTransform(11.8,0);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FFFFFF").s().p("Avb0zIcFAhQgxCdgwDPQhgGfAED6QAEC8A0DQQAgB5BTD7QBWD4AjCJQA8DiAPDUI+3AKg");
	this.shape_113.setTransform(11.6,0);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#FFFFFF").s().p("AvY0zIcAAhQgwCdguDPQhdGeAED7QAEC7AzDRQAgB5BRD7QBUD4AjCJQA6DiAPDUI+xAKg");
	this.shape_114.setTransform(11.3,0);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#FFFFFF").s().p("AvW0zIb8AhQguCdgtDPQhaGeAED7QAEC7AyDRQAfB4BQD8QBSD4AiCJQA6DiAPDUI+tAKg");
	this.shape_115.setTransform(11.1,0);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#FFFFFF").s().p("AvT0zIb3AgQgtCegrDPQhXGeAED7QAEC7AxDRQAfB4BND8QBRD4AiCJQA4DiAPDUI+nAKg");
	this.shape_116.setTransform(10.8,0);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#FFFFFF").s().p("AvR0zIbyAgQgrCdgpDPQhVGfAFD7QAEC7AwDQQAeB5BMD8QBPD3AhCKQA4DiAPDUI+jAKg");
	this.shape_117.setTransform(10.6,0);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#FFFFFF").s().p("AvP0zIbuAgQgpCdgpDPQhQGfAFD6QADC8AvDQQAeB4BKD9QBND3AhCKQA3DiAPDUI+fAKg");
	this.shape_118.setTransform(10.4,0);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#FFFFFF").s().p("AvM0zIbpAfQgoCegmDPQhOGfAED6QAFC8AtDQQAdB4BID9QBND3AfCKQA2DiAPDUI+ZAKg");
	this.shape_119.setTransform(10.1,0);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#FFFFFF").s().p("AvK0zIblAfQgmCdglDQQhLGfAED6QAEC7AtDRQAcB4BID8QBKD4AfCKQA1DiAPDUI+VAKg");
	this.shape_120.setTransform(9.9,0);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#FFFFFF").s().p("AvH0zIbgAfQgkCdgkDQQhIGfAFD6QADC7AsDRQAcB3BFD9QBJD4AeCKQA0DiAPDUI+PAKg");
	this.shape_121.setTransform(9.6,0);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#FFFFFF").s().p("AvF0zIbcAeQgjCegiDPQhFGfAED7QAFC7AqDRQAcB3BDD9QBID4AdCKQAzDiAPDUI+LAKg");
	this.shape_122.setTransform(9.4,0);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#FFFFFF").s().p("AvC0zIbXAeQghCeghDPQhCGfAED7QAEC7AqDRQAbB2BCD+QBFD3AdCLQAyDiAPDUI+FAKg");
	this.shape_123.setTransform(9.1,0);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#FFFFFF").s().p("AvA0zIbTAeQggCdgfDQQg/GfAFD7QAEC7AoDRQAaB2BBD+QBDD3AeCLQAvDiAQDUI+BAKg");
	this.shape_124.setTransform(8.9,0);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#FFFFFF").s().p("Au90zIbOAdQgeCegeDQQg8GfAFD7QAEC7AnDRQAaB2A+D+QBDD3AcCLQAvDiAPDUI97AKg");
	this.shape_125.setTransform(8.6,0);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#FFFFFF").s().p("Au70zIbKAdQgdCegcDPQg5GgAFD6QAEC8AmDQQAZB2A9D/QBBD3AbCLQAvDiAPDUI93AKg");
	this.shape_126.setTransform(8.4,0);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#FFFFFF").s().p("Au40zIbFAdQgbCdgbDQQg2GgAFD6QAEC7AlDRQAZB2A7D/QA/D3AbCLQAtDiAPDUI9xAKg");
	this.shape_127.setTransform(8.1,0);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#FFFFFF").s().p("Au20zIbBAcQgaCegZDQQgzGgAFD6QAEC7AkDRQAYB2A6D/QA9D3AaCLQAtDiAPDUI9tAKg");
	this.shape_128.setTransform(7.9,0);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#FFFFFF").s().p("Auz0zIa8AcQgYCegYDQQgwGfAFD7QAEC7AjDRQAYB1A4EAQA8D2AZCMQArDiAPDUI9nAKg");
	this.shape_129.setTransform(7.6,0);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#FFFFFF").s().p("Aux0zIa4AbQgXCegWDQQgsGgAED7QAEC7AiDRQAXB1A2EAQA7D2AZCMQAqDiAPDUI9jAKg");
	this.shape_130.setTransform(7.4,0);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#FFFFFF").s().p("Auu0zIazAbQgVCegVDQQgpGgAED7QAEC7AhDRQAXB0A0EBQA5D2AYCMQApDiAPDUI9dAKg");
	this.shape_131.setTransform(7.1,0);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#FFFFFF").s().p("Aus0zIavAbQgUCegUDQQglGgAED7QAEC7AhDRQAVB0AzEBQA3D2AYCMQAoDiAPDUI9ZAKg");
	this.shape_132.setTransform(6.9,0);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#FFFFFF").s().p("Auq0zIarAaQgTCfgRDQQgjGgAED6QAEC7AfDSQAVB0AxEBQA2D2AXCMQAoDiAPDUI9VAKg");
	this.shape_133.setTransform(6.7,0);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#FFFFFF").s().p("Aun0zIamAaQgRCegQDQQghGhAFD6QAEC7AfDSIBDF1QA0D2AXCMQAmDiAPDUI9PAKg");
	this.shape_134.setTransform(6.4,0);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#FFFFFF").s().p("Aul0zIaiAaQgPCegPDQQgdGhAED6QAEC7AdDRIBCF2QAzD1AVCNQAlDiAQDUI9LAKg");
	this.shape_135.setTransform(6.2,0);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#FFFFFF").s().p("Aui0zIadAZQgOCfgNDQQgaGhAED6QAFC7AbDRIBAF2QAxD1AVCNQAkDiAPDUI9FAKg");
	this.shape_136.setTransform(5.9,0);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#FFFFFF").s().p("Aug0zIaZAZQgMCegMDRQgXGgAED7QAEC7AcDRIA9F2QAvD1AVCNQAiDiAPDUI9AAKg");
	this.shape_137.setTransform(5.7,0);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#FFFFFF").s().p("Aud0zIaUAZQgLCegKDRQgUGgAFD7QADC7AaDRIA8F2QAtD1AUCNQAiDiAPDUI87AKg");
	this.shape_138.setTransform(5.4,0);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#FFFFFF").s().p("Aub0zIaQAYQgKCfgIDQQgRGhAED7QAFC6AZDSIA5F1QAsD2ASCNQAhDiAPDUI82AKg");
	this.shape_139.setTransform(5.2,0);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#FFFFFF").s().p("AuY0zIaKAYQgHCegHDRQgOGhAED7QAEC6AZDSIA2F1QAqD2ATCNQAgDiAPDVI8xAJg");
	this.shape_140.setTransform(4.9,0);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#FFFFFF").s().p("AuW0zIaGAYQgGCegFDRQgLGhAED6QAEC7AYDSIA0F1QApD1ARCOQAgDiAPDVI8tAJg");
	this.shape_141.setTransform(4.7,0);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#FFFFFF").s().p("AuT0zIaBAXQgECfgEDRQgIGhAFD6QAEC7AWDSQAQBxAiEEQAnD1ARCOQAeDiAPDVI8nAJg");
	this.shape_142.setTransform(4.4,0);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#FFFFFF").s().p("AuR0zIZ9AXIgFFvQgFGiAFD6QAEC7AVDSQAPBxAhEEQAlD1ARCOQAdDiAPDVI8jAJg");
	this.shape_143.setTransform(4.2,0);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#FFFFFF").s().p("AuO0zIZ4AXIgCFvQgCGhAFD7QAEC7AUDRQAPByAeEEQAkD1AQCOQAcDiAPDVI8dAJg");
	this.shape_144.setTransform(3.9,0);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#FFFFFF").s().p("AuM0zIZ0AWIABFwQABGhAFD7QAEC6ATDSQAOBxAdEFQAiD1AQCOQAbDiAPDVI8ZAJg");
	this.shape_145.setTransform(3.7,0);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#FFFFFF").s().p("AuJ0zIZvAWIAEFwQAEGhAFD7QAEC6ASDSQAOBxAbEFQAhD1AOCOQAaDiAPDVI8TAJg");
	this.shape_146.setTransform(3.4,0);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#FFFFFF").s().p("AuH0zIZrAWIAHFvIAMKdQAEC6ARDSQANBwAaEGQAfD0AOCPQAZDiAPDVI8PAJg");
	this.shape_147.setTransform(3.2,0);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#FFFFFF").s().p("AuF0zIZnAVIAKFwQAKGiAFD6QAEC7AQDSQANBwAXEGQAeD0ANCQQAYDhAPDVI8KAJg");
	this.shape_148.setTransform(3,0);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#FFFFFF").s().p("AuA0zIZeAVIAQFwQARGiAED6QAEC7AODSQAMBvAUEHQAaD0AMCQQAXDhAODVI8AAJg");
	this.shape_149.setTransform(2.5,0);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#FFFFFF").s().p("At90zIZZAUQAJCfAKDRQATGjAFD6QAEC6ANDTQALBvATEHQAZD0ALCQQAVDhAPDVI77AJg");
	this.shape_150.setTransform(2.2,0);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#FFFFFF").s().p("At70zIZVAUQALCfALDRQAXGiAED7QAEC6AMDSQAKBwASEHQAXDzAKCRQAVDhAODVI72AJg");
	this.shape_151.setTransform(2,0);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#FFFFFF").s().p("At40zIZQAUQAMCfANDRQAZGiAFD7QAEC6ALDSQAKBvAQEIQAVDzAKCRQATDhAPDVI7xAJg");
	this.shape_152.setTransform(1.7,0);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#FFFFFF").s().p("At20zIZMATQAOCfAODSQAdGiAED7QAEC6AKDSQAKBvANEIQAUDzAKCRQARDhAPDVI7sAJg");
	this.shape_153.setTransform(1.5,0);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#FFFFFF").s().p("Atz0zIZHATQAPCfAQDRQAgGjAFD6QADC7AJDSQAJBuAMEJQASDzAKCRIAfG2I7nAJg");
	this.shape_154.setTransform(1.2,0);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#FFFFFF").s().p("Atx0zIZDATQAQCfASDRQAjGjAED6QAEC7AIDSQAIBuALEJQAQDzAJCRIAfG2I7jAJg");
	this.shape_155.setTransform(1,0);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#FFFFFF").s().p("Atu0zIY+ASQASCfATDSQAmGjAED6QAEC6AHDTQAIBuAJEIQAPD0AHCRIAeG2I7dAJg");
	this.shape_156.setTransform(0.7,0);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#FFFFFF").s().p("Ats0zIY6ASQATCfAVDSQApGjAED6IAKGNQAHBtAHEJIAVGFQAODhAPDVI7ZAJg");
	this.shape_157.setTransform(0.5,0);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#FFFFFF").s().p("Atp0zIY1ASQAVCfAWDSQAsGiAED7IAJGNQAHBtAFEJIASGFQANDhAPDVI7TAJg");
	this.shape_158.setTransform(0.2,0);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#FFFFFF").s().p("Atn0zIYxARQAWCgAYDRQAvGjAFD7IAHGNQAGBtAEEJIAQGFQAMDhAPDVI7PAJg");

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#FFFFFF").s().p("Atk0zIYrARQAZCfAZDSQAyGjAFD7QAEC6ACDSQAGBtACEKIAOGFQAKDhAPDVI7JAJg");
	this.shape_160.setTransform(-0.3,0);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#FFFFFF").s().p("Ati0zIYnARQAaCfAbDSQA1GjAFD7QAEC6ABDSQAFBtABEKIALGFQAKDhAPDVI7FAJg");
	this.shape_161.setTransform(-0.5,0);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#FFFFFF").s().p("Atf0zIYiAQQAcCgAcDSQA4GjAFD6QAEC6AADTQAFBsgCELIAKGFQAIDhAPDVI6/AJg");
	this.shape_162.setTransform(-0.8,0);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#FFFFFF").s().p("Atd0zIYeAQQAdCfAeDSQA7GkAED6QAFC6AADTQADBsgDELIAHGFQAIDhAPDVI67AJg");
	this.shape_163.setTransform(-1,0);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#FFFFFF").s().p("Atb0zIYaAQQAeCfAgDSQA+GkAFD6QADC6gBDTQAEBsgFELQACDyADCTQAGDhAPDVI62AJg");
	this.shape_164.setTransform(-1.2,0);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#FFFFFF").s().p("AtY0zIYVAPQAgCgAhDSQBCGkAED6QAEC6gCDTQACBrgHEMQABDyADCTQAFDhAPDVI6xAJg");
	this.shape_165.setTransform(-1.5,0);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#FFFFFF").s().p("AtW0zIYRAPQAiCfAiDTQBFGjAED7QAEC6gEDTQADBrgIEMQgBDyABCTQAFDhAODVI6sAJg");
	this.shape_166.setTransform(-1.7,0);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#FFFFFF").s().p("AtT0zIYMAOQAjCgAkDSQBHGkAFD7QAEC6gFDTQACBrgKEMQgCDyABCTQADDhAPDVI6nAJg");
	this.shape_167.setTransform(-2,0);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#FFFFFF").s().p("AtR0zIYIAOQAkCgAmDSQBKGkAFD7QAEC5gGDUQABBqgLENQgEDyAACTQACDhAPDVI6iAJg");
	this.shape_168.setTransform(-2.2,0);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#FFFFFF").s().p("AtR0zIYDAOQAmCgAnDSQBNGkAFD6QAEC6gHDTQABBrgNENQgGDxgBCUQACDhAPDVI6dAJg");
	this.shape_169.setTransform(-2.2,0);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#FFFFFF").s().p("AtS0zIX/ANQAnCgApDTQBQGkAFD6QAEC6gHDTQgBBqgOEOQgIDxgBCUQABDhAPDVI6ZAJg");
	this.shape_170.setTransform(-2.1,0);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#FFFFFF").s().p("AtT0zIX6ANQApCgAqDSQBUGlAFD6QAEC6gJDTQgBBqgQEOQgJDxgCCUQAADhAPDVI6UAJg");
	this.shape_171.setTransform(-2,0);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#FFFFFF").s().p("AtU0zIX2ANQArCgArDSQBXGlAED6QAEC6gJDTQgCBqgSEOQgLDxgCCUQgBDiAPDVI6PAIg");
	this.shape_172.setTransform(-1.9,0);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#FFFFFF").s().p("AtU0zIXxAMQAsCgAtDTQBaGkAED7QAEC6gKDTQgCBpgUEPQgMDxgDCUQgDDiAPDVI6JAIg");
	this.shape_173.setTransform(-1.9,0);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#FFFFFF").s().p("AtV0zIXsAMQAuCgAuDTQBdGkAFD7QAEC6gMDTQgCBpgWEPQgODxgDCUQgEDiAPDVI6EAIg");
	this.shape_174.setTransform(-1.8,0);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#FFFFFF").s().p("AtW0zIXoAMQAwCgAvDSQBgGlAFD7QAEC5gNDUQgDBpgXEOQgPDxgFCVQgEDiAPDVI6AAIg");
	this.shape_175.setTransform(-1.7,0);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#FFFFFF").s().p("AtW0zIXjALQAxCgAyDTQBiGlAFD7QAEC5gODUQgDBogZEPQgRDxgFCVQgGDiAPDVI56AIg");
	this.shape_176.setTransform(-1.7,0);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#FFFFFF").s().p("AtX0zIXfALQAyCgAzDTQBmGlAFD6QAEC6gPDUQgEBogbEPQgTDxgFCVQgHDiAPDVI51AIg");
	this.shape_177.setTransform(-1.6,0);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#FFFFFF").s().p("AtY0zIXaALQA0CgA1DTQBpGlAED6QAEC6gPDTQgFBogcEQQgVDxgGCVQgHDiAPDVI5xAIg");
	this.shape_178.setTransform(-1.5,0);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#FFFFFF").s().p("AtZ0zIXWAKQA2ChA2DTQBsGlAED6QAEC6gQDTQgGBogeEQQgWDxgGCVQgJDiAPDVI5sAIg");
	this.shape_179.setTransform(-1.4,0);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#FFFFFF").s().p("Ata0zIXSAKQA3CgA3DTQBvGmAFD6QAEC6gSDTQgGBogfEQQgYDxgHCVQgKDiAPDVI5nAIg");
	this.shape_180.setTransform(-1.3,0);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#FFFFFF").s().p("Ata0zIXNAKQA4CgA5DTQByGlAFD7QAEC5gTDUQgGBnghERQgaDwgICWQgKDiAPDVI5iAIg");
	this.shape_181.setTransform(-1.3,0);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#FFFFFF").s().p("Atb0zIXIAJQA6ChA7DTQB1GlAED7QAEC5gTDUQgHBngjERQgbDwgJCWQgLDiAPDVI5dAIg");
	this.shape_182.setTransform(-1.2,0);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#FFFFFF").s().p("Atc0zIXEAJQA7CgA8DUQB5GlAED7QAEC5gVDUQgHBnglERQgcDwgJCWQgNDiAPDVI5YAIg");
	this.shape_183.setTransform(-1.1,0);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#FFFFFF").s().p("Atd0zIXAAJQA9CgA9DTQB8GmAED6QAEC6gWDUQgIBmgmESQgeDwgKCWQgODiAPDVI5TAIg");
	this.shape_184.setTransform(-1,0);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#FFFFFF").s().p("Ate0zIW7AIQA/ChA/DTQB+GmAFD6QAEC6gXDUQgJBmgoESQgfDwgLCWQgPDiAPDVI5OAIg");
	this.shape_185.setTransform(-0.9,0);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#FFFFFF").s().p("Ate0zIW2AIQBAChBBDTQCBGmAFD6QAEC6gYDUQgJBlgqETQghDwgLCWQgQDiAPDVI5JAIg");
	this.shape_186.setTransform(-0.9,0);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#FFFFFF").s().p("Atf0zIWxAIQBCCgBCDUQCFGmAED6QAEC5gYDUQgKBmgrETQgjDvgMCXQgRDiAPDVI5EAIg");
	this.shape_187.setTransform(-0.8,0);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#FFFFFF").s().p("Atg0zIWtAHQBEChBDDTQCIGmAED7QAEC5gZDUQgLBmgtETQgkDvgNCXQgRDiAPDVI5AAIg");
	this.shape_188.setTransform(-0.7,0);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#FFFFFF").s().p("Ath0zIWpAHQBFChBFDTQCLGmAED7QAEC5gbDUQgLBlguEUQgmDvgNCXQgTDiAPDVI47AIg");
	this.shape_189.setTransform(-0.6,0);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#FFFFFF").s().p("Ati0zIWlAHQBGCgBHDUQCNGmAFD7QAEC5gcDUQgLBlgxEUQgnDvgOCXQgUDiAPDVI42AIg");
	this.shape_190.setTransform(-0.5,0);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#FFFFFF").s().p("Ati0zIWfAGQBIChBJDUQCQGmAFD7QAEC5gdDUQgMBlgyEUQgqDvgOCXQgVDiAPDVI4wAIg");
	this.shape_191.setTransform(-0.5,0);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#FFFFFF").s().p("Atj0zIWbAGQBKChBKDTQCTGnAFD6QAEC6geDUQgNBkgzEVQgrDvgPCXQgWDiAPDVI4sAIg");
	this.shape_192.setTransform(-0.4,0);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#FFFFFF").s().p("Atk0zIWXAGQBLCgBLDUQCXGnAED6QAEC5gfDVQgNBkg1EUQgtDvgPCYQgXDiAPDVI4nAIg");
	this.shape_193.setTransform(-0.3,0);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#FFFFFF").s().p("Atk0zIWSAFQBMChBNDUQCaGnAED6QAEC5gfDVQgOBjg3EVQguDvgRCYQgXDiAPDVI4iAIg");
	this.shape_194.setTransform(-0.3,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_108}]},1).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_115}]},1).to({state:[{t:this.shape_116}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_122}]},1).to({state:[{t:this.shape_123}]},1).to({state:[{t:this.shape_124}]},1).to({state:[{t:this.shape_125}]},1).to({state:[{t:this.shape_126}]},1).to({state:[{t:this.shape_127}]},1).to({state:[{t:this.shape_128}]},1).to({state:[{t:this.shape_129}]},1).to({state:[{t:this.shape_130}]},1).to({state:[{t:this.shape_131}]},1).to({state:[{t:this.shape_132}]},1).to({state:[{t:this.shape_133}]},1).to({state:[{t:this.shape_134}]},1).to({state:[{t:this.shape_135}]},1).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_137}]},1).to({state:[{t:this.shape_138}]},1).to({state:[{t:this.shape_139}]},1).to({state:[{t:this.shape_140}]},1).to({state:[{t:this.shape_141}]},1).to({state:[{t:this.shape_142}]},1).to({state:[{t:this.shape_143}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_145}]},1).to({state:[{t:this.shape_146}]},1).to({state:[{t:this.shape_147}]},1).to({state:[{t:this.shape_148}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_149}]},1).to({state:[{t:this.shape_150}]},1).to({state:[{t:this.shape_151}]},1).to({state:[{t:this.shape_152}]},1).to({state:[{t:this.shape_153}]},1).to({state:[{t:this.shape_154}]},1).to({state:[{t:this.shape_155}]},1).to({state:[{t:this.shape_156}]},1).to({state:[{t:this.shape_157}]},1).to({state:[{t:this.shape_158}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_160}]},1).to({state:[{t:this.shape_161}]},1).to({state:[{t:this.shape_162}]},1).to({state:[{t:this.shape_163}]},1).to({state:[{t:this.shape_164}]},1).to({state:[{t:this.shape_165}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_167}]},1).to({state:[{t:this.shape_168}]},1).to({state:[{t:this.shape_169}]},1).to({state:[{t:this.shape_170}]},1).to({state:[{t:this.shape_171}]},1).to({state:[{t:this.shape_172}]},1).to({state:[{t:this.shape_173}]},1).to({state:[{t:this.shape_174}]},1).to({state:[{t:this.shape_175}]},1).to({state:[{t:this.shape_176}]},1).to({state:[{t:this.shape_177}]},1).to({state:[{t:this.shape_178}]},1).to({state:[{t:this.shape_179}]},1).to({state:[{t:this.shape_180}]},1).to({state:[{t:this.shape_181}]},1).to({state:[{t:this.shape_182}]},1).to({state:[{t:this.shape_183}]},1).to({state:[{t:this.shape_184}]},1).to({state:[{t:this.shape_185}]},1).to({state:[{t:this.shape_186}]},1).to({state:[{t:this.shape_187}]},1).to({state:[{t:this.shape_188}]},1).to({state:[{t:this.shape_189}]},1).to({state:[{t:this.shape_190}]},1).to({state:[{t:this.shape_191}]},1).to({state:[{t:this.shape_192}]},1).to({state:[{t:this.shape_193}]},1).to({state:[{t:this.shape_194}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-87.2,-133.2,174.4,266.5);


(lib.Tween31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgNAPQgHgGABgIQgBgIAHgGQAFgHAIAAQAIAAAHAHQAFAGAAAIQAAAIgFAGQgHAGgIAAQgIAAgFgGg");
	this.shape.setTransform(79.8,28.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgaA2QgLgDgFgFIAAgVQAGAEAKACQAJADALAAQAJAAAFgDQAEgCAAgFQAAgGgHgCQgWgCgLgGQgIgEgEgGQgDgIAAgJQAAgKAEgHQAEgIAGgEQAHgEAIgCQAIgCAJAAQALAAAJACQAKADAFAFIAAAVQgUgIgPAAQgHAAgEADQgFACAAAFQAAAGAHABIARAEQAMABAGAEQAJAFADAFQADAHAAAJQAAAJgDAIQgDAHgHAFQgGAFgIACQgJACgKAAQgOAAgKgDg");
	this.shape_1.setTransform(72.7,24.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("Ag5BIIAAiNIAdAAQAGAMAAAPIAAABQABgGADgGIAHgJQAGgEAFgDQAGgCAHAAQAKAAAJAEQAIAEAGAHQAGAIADAKQACAKAAAMQAAAOgDAKQgEALgFAIQgHAHgIAEQgIAEgKAAQgHAAgFgCQgGgBgEgEQgEgDgDgFIgEgKIAAA3gAgHgsQgFACgDADQgDAEgCAFQgBAFAAAHIAAAEQAAAJABAFQACAGADAFQADADAFACQADACAFAAQAEAAAFgCQAEgCACgDQACgEACgGQACgGgBgIIAAgHIAAgLQgCgFgDgDQgCgDgEgCQgFgCgEAAQgFAAgDACg");
	this.shape_2.setTransform(61.9,26.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgRBOIAAhtIAjAAIAABtgAgMgsQgGgGAAgIQAAgIAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAIQAAAIgFAGQgGAFgIAAQgHAAgFgFg");
	this.shape_3.setTransform(52.8,22.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AASBLIAAhEQAAgIgEgEQgEgFgHAAQgEAAgEACQgEACgCAEQgDACgCAFQgBAGAAAGIAAA6IgkAAIAAiVIAkAAIAABCQABgHAEgFQADgFAFgEQAEgDAFgCQAGgCAIAAQAIAAAGACQAHADAEAFQAFAFACAHQADAIAAAJIAABIg");
	this.shape_4.setTransform(44.4,22.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgaA2QgLgDgGgFIAAgVQAIAEAJACQAKADAJAAQAKAAAFgDQAEgCAAgFQAAgGgHgCQgWgCgLgGQgIgEgEgGQgDgIAAgJQAAgKAEgHQAEgIAHgEQAGgEAIgCQAIgCAIAAQAMAAAJACQAKADAEAFIAAAVQgTgIgPAAQgHAAgEADQgFACAAAFQAAAGAGABIARAEQANABAGAEQAIAFAEAFQADAHAAAJQAAAJgDAIQgDAHgHAFQgGAFgIACQgJACgKAAQgOAAgKgDg");
	this.shape_5.setTransform(33.6,24.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AASA4IAAhDQAAgJgEgEQgEgFgHAAQgEAAgEACQgEACgCAEQgDADgCAFQgBAGAAAGIAAA5IgkAAIAAhtIAdAAQAGAMAAAOIAAABIAFgMQADgFAFgEQAFgEAFgCQAGgCAIAAQAIAAAGACQAHADAEAFQAFAFACAHQADAIAAAKIAABHg");
	this.shape_6.setTransform(23,24.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgUA2QgLgDgHgHQgJgIgEgKQgCgGgBgHQgCgGAAgHQAAgOAFgKQAEgKAIgIQAHgHALgEQAKgDALAAQAMAAAKADQALAEAHAHQAIAHAEALQAFAKAAANIAAABQAAAGgCAHQgBAHgCAFQgCAGgEAFIgHAIQgHAHgLADQgKADgLAAQgKAAgKgDgAgIgfQgDABgDAEQgDAEgBAFQgCAFAAAHIAAAHQAAAKACAGQABAGADAEQADAEAEABQADACAEAAQAFAAADgCQAEgBADgEQADgEABgGQACgGAAgKIAAgHQAAgHgCgFIgEgJQgDgEgEgBQgDgCgFAAQgEAAgEACg");
	this.shape_7.setTransform(11,24.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgQBOIAAhtIAiAAIAABtgAgNgsQgFgGAAgIQAAgIAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAIQAAAIgGAGQgFAFgIAAQgHAAgGgFg");
	this.shape_8.setTransform(2.5,22.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgCBEQgHgBgFgEQgFgFgDgGQgDgHAAgJIAAg2IgOAAIAAgSQAHgBAFgDQAEgBADgFQAEgFAFgSIAUAAIAAAcIAfAAIAAAXIgfAAIAAAuQAAAJAEAEQAEAFAJAAQAGAAAIgDIAAAQQgEAFgGADQgIADgMAAQgHAAgFgCg");
	this.shape_9.setTransform(-4.4,23.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgeA3QgGgCgEgEQgEgEgDgFQgCgGAAgHQAAgIADgFQADgGAHgDQAHgFAWgFQALgCAEgCQAFgDAAgEIAAgBQAAgFgEgDQgFgDgLAAQgQAAgTAKIAAgVQAFgHAJgFQAGgDAHgBQAIgBAIAAQAMAAAKADQAJACAFAHQAGAFACAKQADAIAAALIAAAiQAAAZACAFIgfAAQgFgHAAgLQgCAFgDAEQgDAEgEADQgDADgFABQgGABgGAAQgHAAgFgCgAAAAJQgGADgEADQgDAEAAAGIAAABQAAAFADAEQADACAFAAQAGABAEgGQAFgGAAgKIAAgPQgEAEgJAEg");
	this.shape_10.setTransform(-13.9,24.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgRBLIAAiVIAjAAIAACVg");
	this.shape_11.setTransform(-21.7,22.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgSA1QgKgDgIgHQgIgIgDgKQgEgLAAgOIAAAAQAAgMAEgLQAFgLAHgHQAIgIAJgDQAKgEALAAQALAAAKADQAJADAHAHQAFAGAEAIQADAJAAAKQAAAJgDAIIhAAAQAAAHACAFQADAEAEADQAEACAFACIAMABQAOAAASgHIAAATQgEAGgLAEQgQAEgKAAQgNAAgLgEgAgEghIgGAFIgDAIQgCAGAAAGIAkAAIAAgCQgBgMgEgGQgEgGgIAAQgEAAgEABg");
	this.shape_12.setTransform(-29.7,24.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AATBHIgpg9IAAA9IgkAAIAAiNIA5AAQAMAAAKACQAKADAHAFQAHAGAEAIQAEAIAAAKQAAAIgDAHQgCAHgEAFQgFAEgGADQgGAEgJABIApA8gAgWgDIARAAQAFAAAEgBQAFgBACgDQAFgFAAgLQAAgKgFgFQgFgEgKAAIgSAAg");
	this.shape_13.setTransform(-41.1,23.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgfBIQgIgEgGgIQgFgHgDgLQgDgKAAgNIAAAAQAAgOADgKQADgKAHgHQAGgIAIgDQAJgEAKAAQAHAAAFACQAFACAEAEQAIAGADAJIAAg9IAjAAIAACVIgcAAQgFgKgBgOQgGAOgGAEQgFAEgFACQgGACgHAAQgLAAgIgEgAgIgLQgEACgDAEQgDADgBAEQgCAGAAAGIAAAIQAAAHACAFQABAGADAEQADAEAEACQAEACAEAAQAFAAAEgCQAEgCADgEQADgEABgGQACgGAAgGIAAgEQAAgIgCgHQgBgEgDgEQgDgEgEgCQgEgCgFAAQgEAAgEACg");
	this.shape_14.setTransform(-7.3,0.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgRBLIAAiVIAjAAIAACVg");
	this.shape_15.setTransform(-15.9,0.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgRBOIAAhtIAjAAIAABtgAgMgsQgGgGAAgIQAAgIAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAIQAAAIgFAGQgGAFgIAAQgHAAgFgFg");
	this.shape_16.setTransform(-21,0.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgfA2QgHgDgFgFQgEgFgDgHQgCgIAAgKIAAhHIAjAAIAABDQAAALAEAEQAEAFAIAAQAEAAADgCQAEgCADgDIAEgKQABgFAAgIIAAg5IAjAAIAABtIgcAAQgFgNAAgMIAAgBQgCAHgEAEQgDAGgFADQgEAFgFACQgGABgHAAQgJAAgGgCg");
	this.shape_17.setTransform(-29.6,2.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("Ag3BHIAAiNIA2AAQAMAAAJACQAKACAGAFQAHAEADAHQAEAIAAAJQAAAIgDAGQgCAGgEAEQgFAEgGACIgPADIAAAAQAKABAIACQAIACAEAEQAFAEADAGQADAFAAAIQAAAJgDAHQgDAIgGAFQgIAFgKADQgNACgPAAgAgTAvIAQAAIAMgBQAEgBADgDQAFgDgBgJQABgKgGgEQgDgCgEgBIgMgBIgPAAgAgTgJIAPAAQALAAAEgFQAFgEAAgJQAAgIgFgEQgEgFgJAAIgRAAg");
	this.shape_18.setTransform(-41.4,0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52,-14.8,138.1,52.1);


(lib.Tween29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgJAKQgFgEAAgFQAAgGAFgEQAEgFAFAAQAGAAAEAFQAFAEAAAGQAAAFgFAEQgEAFgGAAQgFAAgEgFg");
	this.shape.setTransform(11.9,-10.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgTAnQgHgDgEgDIAAgQQAEADAIACIANACQAHAAAEgCQACgCABgDQAAgEgGgCQgOgBgJgEQgFgDgDgFQgCgFAAgGQAAgIADgFQACgFAFgDQAFgDAGgCQAFgBAFAAQAJAAAHACQAGACADADIAAAPQgNgFgLAAQgFAAgDACQgDACAAADQAAAEAEABIANACQAJACADACQAHADACAEQADAFAAAGQAAAHgDAFQgCAGgEADQgFAEgGABQgHACgGAAQgKAAgIgCg");
	this.shape_1.setTransform(6.8,-13.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgNAmQgHgDgFgEQgGgGgCgIQgDgHAAgKQAAgJADgHQADgIAFgGQAFgFAHgDQAIgCAHAAQAIAAAHACQAHADAEAEQAEAEADAHQACAGAAAHQAAAHgCAFIguAAIACAIQACADADADIAGACIAJABQAKAAAMgFIAAAOQgDADgHAEQgLADgIAAQgJAAgIgDgAgCgXIgFADIgDAGIgBAJIAZAAIAAgCQAAgJgDgEQgDgEgGAAIgEABg");
	this.shape_2.setTransform(-0.5,-13.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgLA1IAAhqIAXAAIAABqg");
	this.shape_3.setTransform(-6.2,-14.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgWAoQgEgCgDgDQgDgCgBgEQgCgEAAgFIAAAAQAAgGADgEQACgEAEgDQAGgDAPgDIALgDQADgCAAgDIAAgBQAAgDgDgDQgEgCgHAAQgLAAgOAHIAAgPQAEgEAGgEIAJgDIALgBQAJAAAHACQAGACAFAFQADAEACAGQACAGAAAIIAAAYQAAASACAEIgWAAQgEgFAAgJIgEAHIgFAFIgFADIgJABIgJgBgAAAAGQgEACgDADQgCACAAAEIAAACQAAADACACQACADAEAAQAEAAADgEQADgFAAgHIAAgJIgJAEg");
	this.shape_4.setTransform(-11.9,-13.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgNA0IgJgCQgJgDgFgFIAAgRIAOAGQAIADAKAAQAIAAAEgDQAFgDAAgFQAAgEgCgCQgCgCgDgBIgOgDQgKgDgFgDIgGgFIgFgFQgCgGAAgJQAAgIADgHQADgGAFgEQAGgDAHgCQAGgCAHAAQAKAAAIACQAHADAFAEIAAATQgEgDgIgCQgIgCgJAAQgHAAgEABQgEADAAAFQAAADACACQABACADABIAPAEIAJADIAIADIAGAEIADAGQADAFAAAJQAAAIgDAHQgDAGgFAEQgFAEgHACQgIACgIAAg");
	this.shape_5.setTransform(-19.5,-14.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAMAnIgMg0IgKA0IgdAAIgShNIAYAAIAMA4IALg4IAWAAIANA4IAKg4IAXAAIgQBNg");
	this.shape_6.setTransform(-31.8,-13.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgOAnQgIgDgFgFQgGgFgDgIQgCgEgBgEIgBgKQAAgJADgIQAEgIAFgFQAGgFAHgDQAHgCAIAAQAJAAAHACQAHADAGAFQAFAFAEAIQACAIAAAIIAAABIAAAKIgDAIIgEAHIgFAGQgGAFgHADQgHACgIAAQgHAAgHgCgAgFgWQgDABgCACQgCADgBAEIgBAJIAAAFIABALIADAHIAFADIAFABIAGgBIAFgDIADgHIABgLIAAgFIgBgJQgBgEgCgDQgCgCgDgBQgDgCgDABQgCgBgDACg");
	this.shape_7.setTransform(-41.8,-13.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgaAnIAAhMIAUAAQAFAIAAAMIAAAEIACgNIAFgIIAHgDIAGgBQAFAAADADIAAATQgHAAgFABQgGABgDAEQgEADgCAEQgBAEAAAIIAAAeg");
	this.shape_8.setTransform(-48.8,-13.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgEA0IgJgCIgJgFIgHgGIgGgHIgEgKIgDgKIgBgMIAAAAIABgLIADgLIAEgJIAGgHIAIgGIAIgFIALgCIAJgBQAIAAAMADQAIACAEAFIAAASQgEgDgIgCQgHgCgIAAQgHAAgFABQgEACgEAEQgEADgBAGQgCAFgBAGIAAAGQAAAIACAHQABAGADAEQAEADAEACQAEACAGAAQAGAAAFgBIAAghIAYAAIAAAnQgHAHgHADIgLADQgGABgGAAIgKgBg");
	this.shape_9.setTransform(-56.9,-14.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-64.3,-25.9,80.8,21.3);


(lib.Tween27 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgJAKQgFgEAAgGQAAgFAFgEQAEgFAFAAQAGAAAEAFQAEAEABAFQgBAGgEAEQgEAFgGAAQgFAAgEgFg");
	this.shape.setTransform(38.7,-15.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgSAnQgIgDgEgEIAAgPIAMAFQAGACAIAAQAGAAADgCQAEgBAAgFQAAgDgGgBQgPgCgHgEQgGgDgCgFQgDgEAAgHQAAgHADgFQACgGAFgCQAFgEAGgBQAGgBAEgBQAJAAAHACQAGACAEAEIAAAOQgOgEgLAAQgEAAgEABQgDACAAAEQAAADAFABIAMACQAIACAEADQAGACADAFQACADAAAHQAAAHgCAFQgDAGgEADQgEADgGACQgGABgHAAQgKAAgHgBg");
	this.shape_1.setTransform(33.6,-18);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgCAxIgIgEQgDgDgDgFQgCgFAAgHIAAglIgJAAIAAgNIAIgCIAGgFQADgEADgNIANAAIAAAVIAWAAIAAAQIgWAAIAAAgQAAAGADADQADADAGAAQAEAAAGgCIAAAMQgDADgEACQgFADgJAAIgJgBg");
	this.shape_2.setTransform(27.3,-18.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgIAmQgIgDgFgFQgFgGgDgHQgCgIgBgJQAAgGADgLQADgIAGgFQAFgEAIgDQAGgCAGgBQALAAAGACQAHADACAEIAAAQQgLgEgJgBIgIABIgFAEQgCACgBADQgCAEABAFIAAADIABAJQABAEACACQACADADABQAEABAEAAQAJAAAMgFIAAAOQgCAEgHADQgJACgIAAQgIAAgGgCg");
	this.shape_3.setTransform(20.9,-18);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgMAmQgIgDgFgFQgFgFgDgIQgDgHAAgKIAAAAQAAgIADgIQADgIAFgFQAGgFAHgDQAHgCAHgBQAIABAHACQAGACAFAEQAEAFACAGQADAGAAAHQAAAHgDAFIgtAAIACAIQACAEADABIAGADIAJABQAKgBAMgEIAAANQgDAEgHADQgMADgHAAQgJAAgHgCgAgCgXIgFADIgCAHIgCAIIAZAAIAAgCQAAgJgDgEQgDgEgGAAIgEABg");
	this.shape_4.setTransform(13.6,-18);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgOBCQgDgBgCgBIAAgOIAEAAQAFABADgCQADgCAAgFIAAhLIAYAAIAABJQAAAIgCAEQgCAGgDADQgEADgEACQgEABgFAAIgKgBgAgBgrQgEgEAAgFQAAgGAEgEQACgEAHAAQAFAAAEAEQAEAEgBAGQABAFgEAEQgEAEgFAAQgHAAgCgEg");
	this.shape_5.setTransform(7.2,-18.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgOAmQgIgDgFgEQgFgFgDgIQgDgEAAgEIgBgKQAAgJADgIQADgHAFgGQAGgEAHgDQAHgCAIgBQAIABAIACQAHADAGAEQAFAFADAIQADAIAAAIIAAABIgBAJIgCAJIgFAHIgEAGQgGAEgHADQgHACgIAAQgHAAgHgCgAgFgWIgFADIgDAHIgBAJIAAAFQAAAGABAFQABAEACADIAFADIAFABIAFgBIAGgDQACgDAAgEQACgFAAgGIAAgFQAAgFgCgEIgCgHIgFgDIgGgBIgFABg");
	this.shape_6.setTransform(1.9,-18);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgZAnIAAhMIAUAAQAEAJAAAMIAAAEIACgNIAGgIQACgDAEgBQADgBADAAQAFAAACAEIAAATIgMABQgFABgDADQgEADgCAEQgBAEAAAIIAAAeg");
	this.shape_7.setTransform(-5,-18.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgmAyIAAhjIAmAAQAKAAAIACQAHACAFAFQAFAEACAHQACAGAAAJQAAAIgCAGQgCAGgFAFQgFAEgIACQgHADgKAAIgNAAIAAAegAgNACIALAAIAHgBQAEgBACgCIADgFIAAgHIAAgHIgDgFQgCgCgDgBQgDgBgDAAIgNAAg");
	this.shape_8.setTransform(-12.3,-19.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgZAnIAAhMIAUAAQAEAJAAAMIAAAEIACgNIAGgIQACgDAEgBQADgBADAAQAFAAACAEIAAATIgMABQgFABgDADQgEADgCAEQgBAEAAAIIAAAeg");
	this.shape_9.setTransform(-22,-18.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgMAmQgIgDgFgFQgFgFgDgIQgDgHAAgKIAAAAQAAgIADgIQADgIAFgFQAGgFAHgDQAHgCAHgBQAIABAHACQAGACAFAEQAEAFACAGQADAGAAAHQAAAHgDAFIgtAAIACAIQACAEADABIAGADIAJABQAKgBAMgEIAAANQgDAEgHADQgMADgHAAQgJAAgHgCgAgCgXIgFADIgCAHIgCAIIAZAAIAAgCQAAgJgDgEQgDgEgGAAIgEABg");
	this.shape_10.setTransform(-29,-18);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgOAnIgahNIAaAAIAQA4IAQg4IAXAAIgaBNg");
	this.shape_11.setTransform(-36.9,-18);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgLA3IAAhMIAYAAIAABMgAgIgfQgEgEAAgFQAAgGAEgEQADgEAFAAQAGAAAEAEQADAEAAAGQAAAFgDAEQgEAEgGAAQgFAAgDgEg");
	this.shape_12.setTransform(-42.8,-19.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgLA1IAAhpIAXAAIAABpg");
	this.shape_13.setTransform(-46.4,-19.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgMAmQgIgDgFgFQgFgFgDgIQgDgHAAgKIAAAAQAAgIADgIQADgIAFgFQAGgFAHgDQAHgCAHgBQAIABAHACQAGACAFAEQAEAFACAGQADAGAAAHQAAAHgDAFIgtAAIACAIQACAEADABIAGADIAJABQAKgBAMgEIAAANQgDAEgHADQgMADgHAAQgJAAgHgCgAgCgXIgFADIgCAHIgCAIIAZAAIAAgCQAAgJgDgEQgDgEgGAAIgEABg");
	this.shape_14.setTransform(-52,-18);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgrAyIAAhjIApAAQAGAAANADIAIADIAGAGIAGAHIAEAIIACAKIABAMIgBAMQgBAGgCAFIgEAIIgGAHIgHAGIgIADQgNADgHAAgAgRAgIAKAAQAHAAAFgCQAFgCADgEQADgDABgGIABgMIAAgIIgBgKQgBgFgCgDQgDgDgFgCQgEgBgFAAIgOAAg");
	this.shape_15.setTransform(-60.5,-19.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-68.4,-30.3,111.6,21.1);


(lib.Tween14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AgFAFQgCgCAAgDQAAgCACgDQADgCACAAQADAAACACQADADAAACQAAADgDACQgCADgDAAQgCAAgDgDg");
	this.shape.setTransform(60,2.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AgIAfQgGgCgEgEQgFgFgCgGQgCgGAAgIQAAgHACgGQACgGAEgFQAEgEAFgCQAGgCAGgBQAHAAAFACQAFADADAEQADAEACAFQABAEAAAFIgBAJIgrAAQAAAFACAFQACAEACADQADACAEABIAJABQAGAAAGgBIAIgDIAAAHQgCACgFACQgGACgJAAQgGAAgGgCgAgFgXIgFAEIgEAGQgCAFAAAEIAiAAIAAgBIgBgJQgBgDgDgDIgFgEIgGAAQgDgBgEACg");
	this.shape_1.setTransform(55.3,-0.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AgOArQgFgCgEgFQgDgEgCgHQgCgHAAgHIAAgBQAAgHACgFQACgGAEgEQAEgEAFgCQAEgCAGAAIAIABIAHADQACACACAEIAEAHIAAgqIALAAIAABZIgJAAQgCgHAAgJIgEAIIgEAFIgIAEIgHABQgGAAgFgDgAgIgKQgDABgDADQgCACgBAEQgCADAAAGIAAAEIACAKIADAIQADADADACQADACAEAAQAEAAADgCQAEgCADgDQADgDACgEQABgFABgFIAAgDQgBgGgBgFIgFgGQgDgDgEgBIgHgBIgHABg");
	this.shape_2.setTransform(48.3,-1.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AgFAsIAAg/IALAAIAAA/gAgEgfQgCgCAAgDQAAgDACgCQACgCACAAQADAAACACQACACAAADQAAADgCACQgCADgDAAQgCAAgCgDg");
	this.shape_3.setTransform(43.4,-1.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AANAgIgNgwIgLAwIgPAAIgSg/IALAAIAPA3IANg3IALAAIAPA3IANg3IALAAIgRA/g");
	this.shape_4.setTransform(37.3,-0.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("AgOArQgFgCgDgFQgEgEgCgHQgCgHAAgHIAAgBQAAgHACgFQACgGAEgEQAEgEAFgCQAFgCAFAAIAIABIAHADQACACACAEIAEAHIAAgqIALAAIAABZIgJAAQgCgHAAgJIgEAIIgEAFIgHAEIgIABQgGAAgFgDgAgIgKQgDABgCADQgDACgBAEQgCADAAAGIAAAEIABAKIAEAIQADADADACQADACAEAAQAEAAADgCQAFgCACgDQADgDACgEQACgFAAgFIAAgDQAAgGgCgFIgFgGQgCgDgFgBIgHgBIgHABg");
	this.shape_5.setTransform(28.8,-1.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().p("AgFAtIAAhZIAKAAIAABZg");
	this.shape_6.setTransform(24,-1.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#333333").s().p("AgRAhIAAg/IAJAAQADAHAAAIIAAAFIADgKIADgHIAFgDIAFgBQAFAAACACIAAAIIgKABQgFABgDADQgCAEgCAFQgBAGAAAGIAAAcg");
	this.shape_7.setTransform(20.7,-0.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#333333").s().p("AgLAfQgFgCgFgEQgEgEgCgHQgCgEgBgKQAAgHACgHQADgFAEgFQAEgEAFgDQAGgCAGAAQAHAAAFACQAGADAEAEQAEAFACAFQADAHAAAHQgBAKgCAEQgCAHgFAEQgEAEgFACQgGACgGAAQgFAAgGgCgAgHgXIgGAEQgDADgBAEQgBAEAAAFIAAAEQAAAGABAFQACAFACADIAGAEQAEACADAAQAEAAAEgCIAGgEQACgDACgFQABgFAAgGIAAgEQAAgFgBgEIgEgHIgGgEQgEgCgEABQgDgBgEACg");
	this.shape_8.setTransform(14.6,-0.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#333333").s().p("AATArIgThIIgSBIIgRAAIgUhVIAMAAIARBOIAVhOIAMAAIAUBOIAShOIALAAIgUBVg");
	this.shape_9.setTransform(5.2,-1.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#333333").s().p("AgNAfQgFgBgEgDIAAgJIAJAFQAFABAHAAQAHAAADgCQAEgCAAgGIgBgEIgDgEIgJgCIgMgDQgFgCgCgDQgCgEAAgGQAAgEACgEQABgEAEgCQADgCAEgCIAIgBIALACQAFABADADIAAAHQgLgEgHAAQgFAAgEACIgDADQgBACAAADIABAEQAAAAAAABQABAAAAABQABAAAAAAQABABAAAAQAEACAHABIALAEQAEAAACAEQACAEAAAGQAAAEgBAEQgCAEgEADQgDACgEABIgJABQgHAAgGgCg");
	this.shape_10.setTransform(-5.9,-0.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#333333").s().p("AgQAhIAAg/IAIAAQADAHAAAIIAAAFIACgKIAEgHIAFgDIAFgBQAFAAACACIAAAIIgKABQgFABgDADQgCAEgCAFQgBAGAAAGIAAAcg");
	this.shape_11.setTransform(-10.6,-0.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#333333").s().p("AgIAfQgGgCgEgEQgFgFgCgGQgCgGAAgIQAAgHACgGQACgGAEgFQAEgEAFgCQAGgCAGgBQAHAAAFACQAFADADAEQADAEACAFQABAEAAAFIgBAJIgrAAQAAAFACAFQACAEACADQADACAEABIAJABQAGAAAGgBIAIgDIAAAHQgCACgFACQgGACgJAAQgGAAgGgCgAgFgXIgFAEIgEAGQgCAFAAAEIAiAAIAAgBIgBgJQgBgDgDgDIgFgEIgGAAQgDgBgEACg");
	this.shape_12.setTransform(-16.3,-0.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#333333").s().p("AgNAfQgFgBgEgDIAAgJIAJAFQAFABAHAAQAHAAADgCQAEgCAAgGIgBgEIgDgEIgJgCIgMgDQgFgCgCgDQgCgEAAgGQAAgEACgEQABgEAEgCQADgCAEgCIAIgBIALACQAFABADADIAAAHQgLgEgHAAQgFAAgEACIgDADQgBACAAADIABAEQAAAAAAABQABAAAAABQABAAAAAAQABABAAAAQAEACAHABIALAEQAEAAACAEQACAEAAAGQAAAEgBAEQgCAEgEADQgDACgEABIgJABQgHAAgGgCg");
	this.shape_13.setTransform(-22.2,-0.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#333333").s().p("AgMAqQgGgCgFgDIgEgFIgDgGIgCgIIgBgJIAAg0IAMAAIAAA3QAAAGABAFQACAEADADQACACAFACIAIABIAKgBIAHgEQACgDACgEQABgFAAgGIAAg3IAMAAIAAA0IgBAJIgCAIIgDAGIgEAFQgEADgHACQgGACgHAAQgGAAgGgCg");
	this.shape_14.setTransform(-29.2,-1.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#333333").s().p("AAfArIAAhKIgZBKIgMAAIgZhJIAABJIgLAAIAAhVIASAAIAYBKIAZhKIASAAIAABVg");
	this.shape_15.setTransform(-41.4,-1.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#333333").s().p("AARArIgjgoIAAAoIgLAAIAAhVIAcAAQAGAAAFACQAFACAEADQADADACAFQABAEABAGQgBAGgBAEQgCAFgEACQgDADgFABQgFACgFAAIgCAAIAgAlgAgSgBIAQAAIAHgBQADgBACgCIADgFIABgHIgBgGIgDgFQgCgCgDgBIgHgBIgQAAg");
	this.shape_16.setTransform(-49.9,-1.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#333333").s().p("AAAAsIgIgCIgGgEIgGgFQgDgDgCgEIgEgHIgBgJIgBgKQgBgHADgLIADgHIAFgHIAFgFIAHgDIAHgDIAIgBQAIAAAJADQAGADADADIAAAKQgEgEgGgCQgHgCgIAAQgHAAgEACQgFACgEAEQgDAEgCAFQgBAGgBAHIAAAEQABAIABAHQACAGAEAEQAEAFAFACQAEACAHAAQAHAAAHgDQAHgCADgEIAAAJQgDAEgGADQgJADgHAAIgHgBg");
	this.shape_17.setTransform(-57.7,-1.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#333333").s().p("AgWApQgDgBgCgCIAAgHQAFACAIABQAEAAADgDQADgCABgEIABgEIgEAAIgYg/IAMAAIATA3IATg3IALAAIgYBAIgEAJQgCAFgCABQgCADgDABQgEACgEAAQgFAAgDgCg");
	this.shape_18.setTransform(36.5,-15.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#333333").s().p("AgEAtIAAhZIAJAAIAABZg");
	this.shape_19.setTransform(31.9,-18.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#333333").s().p("AABApIgFgDQgDgCgCgEQgCgDAAgHIAAgkIgJAAIAAgHIAGgBIAEgDQACgDABgOIAHAAIAAATIAUAAIAAAJIgUAAIAAAkQAAAGACADQADACAFAAQAGAAAFgCIAAAGIgEADQgEACgFAAIgHgBg");
	this.shape_20.setTransform(28.1,-17.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#333333").s().p("AAQAtIAAgtQAAgFgCgCQgEgDgGgBQgEAAgDACIgHAEIgDAGQgCADAAAGIAAAjIgMAAIAAhZIAMAAIAAAsQAAgFADgEIAFgGIAHgDIAHgCIAJACQADABADADQACACACAFQABAEAAAEIAAAsg");
	this.shape_21.setTransform(22.3,-18.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#333333").s().p("AgKAqIgHgCQgEgCgEgDIAAgIIAIAEIAHACIAJAAIAIgBIAHgDQADgDABgEQABgEAAgFIAAgKIgDAIIgFAEIgGAEIgIABQgGAAgGgCQgFgDgDgEQgDgFgCgFQgCgFAAgIQAAgGACgGIAGgKQAEgEAFgCQAEgCAHAAIAHABQAEABACACQAEACABADIADAHQABgIADgHIAIAAIAAA1QAAAIgDAGQgCAFgEAEQgEAEgHACQgFACgGAAIgKgBgAgIggIgFAEQgDACgBAEQgBAEAAAFIAAAEIAAAJIAEAGIAFAEQAEABAEAAIAIgBIAGgEQADgCACgEQABgDAAgGIAAgCQAAgGgBgEQgBgEgDgCQgEgEgDgBIgHgBIgIABg");
	this.shape_22.setTransform(15,-16);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#333333").s().p("AgFAsIAAg/IALAAIAAA/gAgEgfQgCgCAAgDQAAgDACgCQACgCACAAQADAAACACQACACAAADQAAADgCACQgCADgDAAQgCAAgCgDg");
	this.shape_23.setTransform(10.1,-18.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#333333").s().p("AgNAgQgFgCgEgEIAAgIIAJAFQAFABAHABQAHAAADgCQAEgDAAgFIgBgFIgDgDIgJgDIgMgDQgFgCgCgDQgCgDAAgGQAAgGACgDQABgDAEgDQADgCAEgBIAIgCIALACQAFABADACIAAAJQgLgFgHAAQgFAAgEACIgDADQgBACAAADIABAEQAAAAAAABQABAAAAABQABAAAAAAQABABAAAAQAEACAHACIALACQAEACACADQACAEAAAGQAAAFgBAEQgCADgEACQgDADgEACIgJABQgHAAgGgCg");
	this.shape_24.setTransform(6,-16.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#333333").s().p("AARAhIAAgtQAAgFgEgDQgDgDgGAAQgEAAgDACIgGAEIgFAGQgBAEAAAFIAAAjIgLAAIAAg/IAIAAQADAHAAAIIAAACQABgEACgEIAFgGIAHgEIAHgBIAJABQADACADADQACACACAEQABAFABAFIAAArg");
	this.shape_25.setTransform(0,-17);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#333333").s().p("AgFArIAAhVIALAAIAABVg");
	this.shape_26.setTransform(-5.2,-18);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#333333").s().p("AAQAhIAAgtQAAgFgCgDQgEgDgGAAQgEAAgDACIgHAEIgDAGQgCAEAAAFIAAAjIgMAAIAAg/IAJAAQADAHAAAIIAAACQAAgEADgEIAFgGIAHgEIAHgBIAIABQAEACADADQACACACAEQABAFAAAFIAAArg");
	this.shape_27.setTransform(-12.8,-17);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#333333").s().p("AgLAgQgFgDgFgEQgEgFgCgFQgCgFgBgKQAAgIACgFQADgHAEgEQAEgEAFgCQAGgCAGgBQAHABAFACQAGACAEAEQAEAEACAHQADAFAAAIQgBAKgCAFQgCAFgFAFQgEAEgFADQgGACgGAAQgFAAgGgCgAgHgXIgGAEQgDADgBAEQgBAEAAAFIAAAEQAAAGABAFQACAFACADIAGAEQAEABADAAQAEAAAEgBIAGgEQACgDACgFQABgFAAgGIAAgEQAAgFgBgEIgEgHIgGgEQgEgCgEAAQgDAAgEACg");
	this.shape_28.setTransform(-19.8,-16.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#333333").s().p("AgFAsIAAg/IALAAIAAA/gAgEgfQgCgCAAgDQAAgDACgCQACgCACAAQADAAACACQACACAAADQAAADgCACQgCADgDAAQgCAAgCgDg");
	this.shape_29.setTransform(-24.7,-18.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#333333").s().p("AgFAtIAAhZIALAAIAABZg");
	this.shape_30.setTransform(-27.4,-18.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#333333").s().p("AgFAtIAAhZIAKAAIAABZg");
	this.shape_31.setTransform(-30,-18.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#333333").s().p("AgFAsIAAg/IALAAIAAA/gAgEgfQgCgCAAgDQAAgDACgCQACgCACAAQADAAACACQACACAAADQAAADgCACQgCADgDAAQgCAAgCgDg");
	this.shape_32.setTransform(-32.8,-18.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#333333").s().p("AAfArIAAhKIgZBKIgMAAIgZhJIAABJIgLAAIAAhVIASAAIAYBKIAZhKIASAAIAABVg");
	this.shape_33.setTransform(-39.4,-18);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#333333").s().p("AgLArIgHgCQgEgCgEgEIAAgJQAFAEAEACQAGACAIAAIAIgBQADgBADgDIAEgGIABgIIgBgHQgBgEgDgDIgGgBQgEgCgEAAQgKAAgKAEIgBAAIAAgtIAvAAIAAAKIglAAIAAAYQAGgBAHAAQAHAAAGABQAFACAEAFQADACACAGQABAEAAAGQAAAGgCAEQgCAFgEAEQgEAEgFACQgGACgGABIgJgBg");
	this.shape_34.setTransform(-50.5,-17.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#333333").s().p("AgEAFQgDgCAAgDQAAgCADgDQACgCACAAQAEAAACACQACADAAACQAAADgCACQgCADgEAAQgCAAgCgDg");
	this.shape_35.setTransform(-55.2,-14.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#333333").s().p("AAEArIAAhKIgSAWIgBAAIAAgNIARgUIAOAAIAABVg");
	this.shape_36.setTransform(-59.4,-18);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-63.6,-27.4,134.9,34.6);


(lib.Tween2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Dana();
	this.instance.parent = this;
	this.instance.setTransform(-121,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121,-125,275,250);


(lib.insightlysvg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// insightly.svg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FE5A27").s().p("AgYBEQgegCgEglQgCgNAAgIQgCgkAggXQAegXAfAIQAbAIADAbQACAagLAZQgNAdgbAOQgMAGgOAAIgKgBg");
	this.shape.setTransform(85.9,14.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FE5A27").s().p("AgYBEQgegCgEglQgCgNAAgIQgCgkAggXQAegXAfAIQAbAIADAbQACAagLAZQgNAdgbAOQgMAGgOAAIgKgBg");
	this.shape_1.setTransform(10.1,14.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FE5A27").s().p("ACCC9QgIgFgFAAQgGAAgHAFQgtAdgvgWQgtgWgIg3QgGgiAIg4IAFgnQACgXgBgRQgBgMgCgEQgDgIgIgCQgNgEgNAUQgQAZgJAtQgOA/ACBCQABAtguAOQgUAFgRAAQgNAAgFgEQgEgEgDgMIgBgFQgVAQgVAEQgnAHgegSQgdgSgLgmQgIgYAAgXQgChxARhVQAEgZAYgVQAYgWAZgDQAOgCAKAKQAJALgBARQgCAXgIAtQgPBaAMBRQABAMAGAKQAGAJAIABQAIABAHgIQAVgZAAgXIAChtIADg/QADgvAsgXQATgLAUgDQARgDAKAJQAJAJgCARQgBAKgFAQIgGAZQgCAGABAEQAEgIAKgOQAhguAmgOQAagLAWAMQAWALAIAdQAHAegFAvIgIBEQgEAoACAeQAAANAFAPQADAKAKAGIgBgNQAAgHABgEQAKgxAugVQAagMAGAcIADAWIAEAXQAHAcANAOQASASAVgDQAPgCAIgLQAIgKgCgQQgDgRgPgUQgNgQgTgQIgjgaQgngcgUgcQgVgfADgmQADgmAZgYQAWgXAngIQA+gNAyATQAiAMAYAbQAXAZAAAdQgBAcgXAaQgRASgSAIQgYAJgGgZQgDgggEgPQgHgbgNgOQgNgQgWAAQgRABgJAKQgJAKACARQADAdAfAfQAMANAZAPQAyAbAVAlQAWAggDAoQgDAngaAZQgbAYgrAHQgUADgSAAQgzAAgmgYg");
	this.shape_2.setTransform(37.9,42.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FE5A27").s().p("An6GjQhAgUgJg3QgGgnAcgeQATgVAqgTQAigQA6gTQAKgDgDgJIgGgYQglAhgvgCQgtAAgegtQgMAQgMAJQgpAhgvgQQgwgQgOgzQgHgcAAgUQgDhcAPhdQAEgdAXgXQAWgXAcgFQAMgCAJAGQAJAGADAMQACAIgCAMIgDAUQgSBcAFBTQACAlAHARQAHATARgGQAHgDAGgKQAFgKgBgIQgVh0AxhVQAhg3A7gPQAggIAaAKQARAFAHANIADAEQACAAADgDQAOgMAUgJQAVgJAOALQAOALgDAWQgFApgFAXQgNBGAHBbQAEAwAEAYQATgRAIgNQABgBAAgEQAAhVAOipQAKh4AIg8QAEgSACgSQADgQAOgPQAVgWAagJQATgGAMAJQAMAIgBATIgIBHIgWCwIAAAKQAMgSAPgMQAnggAqAHQAoAHAMApQAKAigGA3QgHBNACAmQACAbAHAPQAHAMALAAQAKABAIgLQAEgDgCgFQgEgZABgjIAEg7QADg2AGg2QABgGgCgCQgCgCgGAAQgLAAgKgEQgMgFgBgJQgCgJAKgIQAMgIAVgJQAHgCABgKQADgwAJgwQADgQAKgMQAagdAbgJQAUgGAMAJQANAKgCAVIgLBVIgBAOQAFAAAIgEIAWgIQAOgGAIgCQATgEAAASQACAhgUAeQgFAJgMAFIgWAHIgNADQgMADgCADQgCACgCAMIgHBNQgEAtAAAgQACAtAHAVQAEAMAEAGQAGAIAKABQAVAEAOgWIAIgMQAFgIAEgEQABgBAAgHQAAgsALh0IAPiOQAHhJAKgzQACgOAJgLQAagdAbgJQAVgHANALQANAKgDAVQgCAZgHAxIgaDFQgIBBgCAeQgFA9AJAwQAEAQAFAGQAIAJALgFQAQgFgCgMQgDgXAChBQAEhKAIgxQAFgZAVgWQAVgXAZgFQARgEALAJQAKAIAAASQAAANgDARIgFAdQgPBiAJBLQACAPAFAMQAIAPAMAAQAPAAAGgPQAHgOAAgYQAAg/ALhhQAIhDA/gYQASgHANAJQAMAJAAATIgBAKIgIAwQgFAegBATQgFA0AFBGIAGA/IACALQAUgQAPgZIANgVQAIgNALABQAGACAEAFQAEAGABAHQACAbgPAcQgRAcglAYQgGADABAJQAHAlAAAdQACA7gjAoQgiAog7AHQgdAEgYgBQgcgCgYgJQgqgTgNgkQgPg0AlgkQAVgVA0gWQAggNAsgPQAIgDgCgHIgHgkQgTAXgTAKQgZANghgFQgkgGgUgZQgDgHgEAHQgoAsg9gQQghgJgSggIgGgLQgQAVgNAMQgfAbgugEQgtgEgXgdQgDgEgCABIgEAEQgYAaglAFQgkAFgcgTQgfgVgLg0QgFgaACgfQABgSAFgkIAFgpQACgYgBgRQgBgLgCgEQgDgHgHgCQgQgGgNARQgNAQgHAgQgLAyAABMIABA2QACAugxAOQgLADgYACQgRABgFgNIgZARQgBAAAAABQgBAAAAABQAAABAAAAQAAABAAAAIABAFIAGA2QAFBIgqAtQggAhg4AJQgWADgTAAQgbAAgXgGgAI0D5QgsATgRAOQgSAOgBAQQgBAdAWALQAZANAVgQQAegTABgzIgCgUQgBgLgCgCIgCAAQgDAAgIADgAmZD7QglAPgUAQQgSAOgBAQQAAAOAGALQAGAMALAFQANAFAOgDQAOgCAJgJQAagVgCguIgBgPQgBgOgDgBIgCgBQgDAAgLAEgAm8huQgcAKgSAfQgcAuAJBFQAEAaAIAPQAOAZAcgJQAdgJAMgmQAHgTACgaIADgtIgBgVQAAgYgIgRQgIgRgOAAQgFAAgGADg");
	this.shape_3.setTransform(150.1,42.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.1,0,224.5,85.1);


(lib.cta = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgbAwIAAhfIA3AAIAAAQIglAAIAAAWIAiAAIAAAPIgiAAIAAAaIAlAAIAAAQg");
	this.shape.setTransform(39.3,0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgbAwIAAhfIA3AAIAAAQIglAAIAAAWIAiAAIAAAPIgiAAIAAAaIAlAAIAAAQg");
	this.shape_1.setTransform(32,0.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAOAwIgTglIgMAAIAAAlIgSAAIAAhfIAfAAQAPAAAIAHQAJAGgBAOQAAAEgBAEIgDAIQgFAHgIAEIAaApgAgRgEIAOAAIAEgBIAFgDQADgEAAgHQAAgFgDgEIgFgCIgEgBIgOAAg");
	this.shape_2.setTransform(24.6,0.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgbAwIAAhfIA3AAIAAAQIglAAIAAAWIAiAAIAAAPIgiAAIAAAqg");
	this.shape_3.setTransform(16.9,0.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAOAwIgTglIgMAAIAAAlIgSAAIAAhfIAfAAQAPAAAIAHQAJAGAAAOQAAAEgCAEIgDAIQgFAHgHAEIAZApgAgRgEIANAAIAFgBIAEgDQAEgEAAgHQAAgFgDgEIgEgCIgGgBIgNAAg");
	this.shape_4.setTransform(6,0.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgMAwQgGgCgGgDIgJgHIgHgKIgEgMQgBgHAAgHQAAgGABgHQACgHADgFQAFgMALgFQAFgDAGgCQAGgBAGAAQAOAAALAGQAKAGAGALQAFALAAAOQAAAPgFALQgGALgKAGQgKAGgPAAQgGAAgGgBgAgHgfIgGADIgFAFIgEAHQgEAHAAAJIABAJIACAIQAEAIAGAEIAGADIAHABQAGAAAFgCQAFgDADgEQAHgJAAgPQAAgJgDgHQgDgIgGgEIgHgDIgHgBIgHABg");
	this.shape_5.setTransform(-3.7,0.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgbAwIAAhfIA3AAIAAAQIglAAIAAAWIAiAAIAAAPIgiAAIAAAqg");
	this.shape_6.setTransform(-11.9,0.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgIAwIAAglIggg6IAVAAIATAqIAUgqIAVAAIggA6IAAAlg");
	this.shape_7.setTransform(-23.2,0.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAOAwIgTglIgMAAIAAAlIgSAAIAAhfIAfAAQAPAAAIAHQAJAGgBAOQAAAEgBAEIgDAIQgFAHgHAEIAZApgAgRgEIAOAAIAEgBIAEgDQAEgEAAgHQAAgFgDgEIgEgCIgFgBIgOAAg");
	this.shape_8.setTransform(-30.7,0.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgIAwIAAhPIgaAAIAAgQIBFAAIAAAQIgaAAIAABPg");
	this.shape_9.setTransform(-38.8,0.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FE5A27").s().p("AmiDKQhUAAg7g8Qg1g1gFhKIAAgPQAAhSA6g7QA7g8BUAAINFAAQBUAAA7A8QA6A7AABSIAAAPQgFBKg1A1Qg7A8hUAAg");

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#D82800").s().p("AmiBsQhUAAg7g7Qg6g6AAhTIAAgPQAFBKA1A0QA7A7BUAAINFAAQBUAAA7g7QA1g0AFhKIAAAPQAABTg6A6Qg7A7hUAAg");
	this.shape_11.setTransform(0,12.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-62,-20.1,124.1,43.3);


(lib.click = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CC6600").s().p("EgzAAW5MAAAgtxMBmBAAAMAAAAtxg");
	this.shape.setTransform(53.5,-16.5);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


// stage content:
(lib._300x250_A2 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* Click to Go to Web Page
		Clicking on the specified symbol instance loads the URL in a new browser window.
		
		Instructions:
		1. Replace http://www.adobe.com with the desired URL address.
		   Keep the quotation marks ("").
		*/
		
		this.button_1.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
			window.open(clickTag, "_blank");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(124));

	// Click
	this.button_1 = new lib.click();
	this.button_1.parent = this;
	this.button_1.setTransform(125.5,139.2,0.459,0.853,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.button_1, 0, 1, 2, false, new lib.click(), 3);

	this.timeline.addTween(cjs.Tween.get(this.button_1).wait(124));

	// Border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333333").ss(1,1,1).p("A3bzhMAu3AAAMAAAAnDMgu3AAAg");
	this.shape.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(124));

	// CTA
	this.instance = new lib.cta("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(226.5,214.3,1.25,1.25);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(23).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},23).wait(78));

	// CRM mess
	this.instance_1 = new lib.Tween27("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(44.4,145.6,1.659,1.659,0,0,0,-42.9,0.7);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(79).to({_off:false},0).to({scaleX:1.39,scaleY:1.39,x:52.5,y:133.9,alpha:1},22).wait(23));

	// Grow
	this.instance_2 = new lib.Tween29("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(82.5,114.5,1.659,1.659,0,0,0,-15.9,1.3);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(57).to({_off:false},0).to({regY:1.2,scaleX:1.39,scaleY:1.39,x:84.4,y:107.8,alpha:1},22).wait(45));

	// Build
	this.instance_3 = new lib.Tween31("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(71.7,36.8,1.163,1.163,0,0,0,7.8,0.2);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(35).to({_off:false},0).to({regX:7.7,scaleX:0.97,scaleY:0.97,x:75.3,y:42.9,alpha:1},22).wait(67));

	// CRM
	this.instance_4 = new lib.Tween14("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(84.6,165.9,1.036,1.036,0,0,0,0.4,0.2);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(101).to({_off:false},0).to({alpha:1},22).wait(1));

	// Logo
	this.instance_5 = new lib.insightlysvg("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(68.5,213.8,0.75,0.75,0,0,0,112.5,42.8);
	this.instance_5.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regY:42.7,scaleX:0.44,scaleY:0.44,x:68.6,alpha:1},23).wait(101));

	// Wave
	this.instance_6 = new lib.Wave();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-25.8,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({x:87.2},23).wait(101));

	// Wave copy
	this.instance_7 = new lib.Wave();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-63.7,125,1.077,1.077,5,0,0,0.1,0.1);
	this.instance_7.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({x:101.3,alpha:0.5},23).wait(101));

	// Dana
	this.instance_8 = new lib.Tween2("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(146,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({x:205.7},23).wait(101));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.8,98.8,470.9,302.4);
// library properties:
lib.properties = {
	id: '632E1B6A35034DFF8AD5B71D125DC4F3',
	width: 300,
	height: 250,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Dana.jpg?1498844411026", id:"Dana"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['632E1B6A35034DFF8AD5B71D125DC4F3'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;