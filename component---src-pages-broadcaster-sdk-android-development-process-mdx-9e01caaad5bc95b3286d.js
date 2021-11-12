(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{PWdQ:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return s})),a.d(t,"default",(function(){return b}));a("91GP"),a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("q1tI");var n=a("7ljp"),i=a("XbGe"),r=a("Wbzz");a("qKvR");function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var s={},l={_frontmatter:s},c=i.a;function b(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,["components"]);return Object(n.b)(c,o({},l,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h2",null,"Step 1: Download SDK package"),Object(n.b)("p",null,"Before you download the SDK package, go to the ",Object(n.b)("a",o({parentName:"p"},{href:"https://video.ibm.com/dashboard/integrations/api-access"}),"API/SDK acccess")," page of the Dashboard and create a Channel API access for your application. When creating the credentials make sure to select “Native application” at the end."),Object(n.b)("p",null,"When you’ve created your API access you can download the SDK package from the “Broadcaster SDK” section of this same page. Use the “Download Android Broadcaster SDK” button."),Object(n.b)("h2",null,"Step 2: Explore the SDK package"),Object(n.b)("p",null,"The downloaded zip archive contains the sample application, and inside the ",Object(n.b)("inlineCode",{parentName:"p"},"m2repository")," folder the packaged SDK and its IBM specific dependencies."),Object(n.b)("h2",null,"Step 3: Create (or open) your project"),Object(n.b)("p",null,"Open the project that you would like to integrate the SDK in.\nThe SDK uses the followng permissions:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"android.permission.INTERNET")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"android.permission.CAMERA")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"android.permission.RECORD_AUDIO"))),Object(n.b)("p",null,"The latter two, of course should be requested dynamically when needed, just like the sample app does."),Object(n.b)("p",null,"The SDK also requires the Android device — on which the resulting application is installed — to have at least one camera."),Object(n.b)("p",null,"You don’t need to update the ",Object(n.b)("inlineCode",{parentName:"p"},"AndroidManifest.xml")," of your application with these persmissons, as they will be automatically added during the manifest merge process."),Object(n.b)("h2",null,"Step 4: Add the SDK to the project"),Object(n.b)("p",null,"Import from local repo: copy the ",Object(n.b)("inlineCode",{parentName:"p"},"m2repository")," folder to your project. In your project’s ",Object(n.b)("inlineCode",{parentName:"p"},"build.gradle")," put the Video Streaming SDK dependency:"),Object(n.b)("pre",null,Object(n.b)("code",o({parentName:"pre"},{className:"language-gradle"}),"repositories {\n    maven {\n        name 'IBMLocal'\n        url new File(\"${rootProject.rootDir.path}/m2repository\").toURI()\n    }\n}\n\ndependencies {\n    implementation 'com.ibm.cloudvideo.android.broadcaster:sdk:0.7.+'\n}\n")),Object(n.b)("p",null,"You can find this in the sample application as well, just copy those settings."),Object(n.b)("h2",null,"Step 5: Create Broadcaster"),Object(n.b)("p",null,"Setting up a broadcaster session in your app can be done in a few easy steps. The main component you instantiate is an ",Object(n.b)("inlineCode",{parentName:"p"},"AndroidBroadcaster")," object. This class is responsible for the whole broadcast session — that is making connection with the broadcaster server, gathering the audio and video data through the AudioRecord and Camera2 APIs of Android, and present a preview of the captured frames using a TextureView."),Object(n.b)("p",null,"The AndroidBroadcaster class has multiple configuration options upon creation, many of them has sane defaults already set up.\nThe constructor parameters ",Object(n.b)("em",{parentName:"p"},"in order of importance, not actual order")," are:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"channelId"),": this is a mandatory and crucial value. This is the IBM (Enterprise) Video Streaming channel’s id that will be used to broadcast to"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"accessToken"),": this is a mandatory and crucial value. This is the access token that is used to access the IBM Channel API. For more information see: ",Object(n.b)("a",o({parentName:"li"},{href:"#step-7:-authenticating-to-the-broadcast-server",title:"Authentication"}),"Step 7")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"context"),": is the context of the current activity. Used for various operations, for example getting available cameras"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"textureView"),": is the view on which the preview will be rendered"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"lifecycleListener"),": is a listener part of the SDK, that can be used to receive state updates from the broadcaster instance. Has a default value, that ignores all state changes. It is highly recommended to listen — at least — to broadcaster lifecycle events"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"resolution"),": the target resolution that will be used for both the preview and the outgoing video stream. The default value is 1280x720, but not all devices (actually camera + encoder pairs) support 720p resolution (or any other specific resolution for that matter). Therefore it is ",Object(n.b)("em",{parentName:"li"},"your responsibility")," to query which resolutions are supported by the device, and set one that is supported and sufficient for your needs. It is recommended to use 16:9 aspect ratio. The sample app has a basic implementation of this"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"cameraIdList"),": is an Array of Strings containing all the camera ids (provided by Camera2 API) that you wish to make available for the SDK"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"initialCameraIdx"),": is the index of the camera from ",Object(n.b)("inlineCode",{parentName:"li"},"cameraIdList")," to be selected from start. By default the first camera is selected"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"errorListener"),": is a listener part of the SDK, that can be used to receive error events from the broadcaster instance. Has a default value, that ignores all events. It is recommended to listen to error events"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"callbackLooper"),": the Android Looper that will be used to execute callbacks on. By default it is the Looper from which the broadcaster has been instantiated"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"targetBitrate"),": is a the desired output bitrate (in bit/s) after encoding the video. Default value is 3 Mbit/s. Please note: the resulting actual output bitrate value may vary depending on the underlying encoder of the device and the captured input content"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"targetFps"),": a Double value representing the desired output frames / second of the video stream. Default value is 25.0 fps"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"camera2Listener"),": is an optional listener which can be used to get notified about camera related events. Has a default value, that ignores all events. In a tipical use-case you don’t need to use this listener")),Object(n.b)("p",null,"For example:"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Kotlin")),Object(n.b)("pre",null,Object(n.b)("code",o({parentName:"pre"},{className:"language-kotlin"}),"androidBroadcaster = AndroidBroadcaster(\n                this@BroadcastActivity,\n                textureView,\n                cameraManager.cameraIdList,\n                BroadcasterLifeCycleListener(),\n                targetResolution,\n                errorListener = BroadcasterErrorListener(),\n                camera2Listener = cameraListener,\n                channelId = broadcastConfiguration.channel!!.id.toString(),\n                accessToken = tokenContainer.accessToken)\n")),Object(n.b)("h2",null,"Step 6: Broadcaster user interface"),Object(n.b)("p",null,"The IBM Video Streaming SDK doesn’t provide any user interface besides the captured preview. To help get started with building your own UI, you can find a basic UI implementation in the sample app."),Object(n.b)("h2",null,"Step 7: Authenticating to the broadcast server"),Object(n.b)("p",null,"To be able to start the actual broadcast session, you need a ",Object(n.b)("strong",{parentName:"p"},"Channel ID")," to broadcast to and an ",Object(n.b)("strong",{parentName:"p"},"Access Token")," which authenticates your broadcast. Both can be obtained using IBM Video Streaming Channel API. For further details, please refer the ",Object(n.b)("a",o({parentName:"p"},{href:"https://ibm.github.io/video-streaming-developer-docs/channel-api-basic-channel-management",title:"IBM Video Streaming Channel API"}),"Channel API Documentation"),". Once you obtained the Channel ID and the Access Token you can use them to start the actual broadcast."),Object(n.b)("p",null,"The SDK as a convenience provides an implementation of the IBM Video Streaming Authentication Flow, see ",Object(n.b)(r.Link,{to:"/broadcaster-sdk-android/aux-features#authentication",mdxType:"Link"},"Athentication")," in the Auxiliary Features section. Example usage can also be found in the provided sample application."),Object(n.b)("h2",null,"Step 8: Starting the broadcaster"),Object(n.b)("p",null,"By now you have configured your broadcaster and it is ready to show you the preview of captured frames, and receive audio and video data to be encoded and sent to IBM’s servers."),Object(n.b)("h3",null,"Capturing and showing preview"),Object(n.b)("p",null,"The broadcaster client has multiple states (see: ",Object(n.b)("a",o({parentName:"p"},{href:"#state-change-callbacks",title:"State change callbacks in Step 9"}),"Step 9")," section for more information), but it is in the ",Object(n.b)("strong",{parentName:"p"},"Uninitialized")," state initially. To be able to see the preview (before the actual broadcast) the instance needs to be “prepared”:"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Kotlin")),Object(n.b)("pre",null,Object(n.b)("code",o({parentName:"pre"},{className:"language-kotlin"}),"androidBroadcaster.prepareComponents()\n")),Object(n.b)("p",null,"This call will prepare all the required sub-components of the SDK instance (e.g: start the capture devices), then it will render the captured frames onto the preview surface. This signal makes the SDK transition through the following states:"),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},"Uninitialized -> Preparing -> Ready")),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Please note"),": It is your responsibility to check and ask for the appropriate permissions before calling ",Object(n.b)("inlineCode",{parentName:"p"},"prepareComponents()")," on the SDK instance."),Object(n.b)("p",null,"The API is symmetric, to tear down the instance (and stop the preview along with any potentially running broadcast) you can call:"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Kotlin")),Object(n.b)("pre",null,Object(n.b)("code",o({parentName:"pre"},{className:"language-kotlin"}),"androidBroadcaster.releaseComponents()\n")),Object(n.b)("p",null,"This will transition the SDK instance through the following states:"),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},"Ready -> Releasing -> Uninitialized")),Object(n.b)("p",null,"(In the case when the broadcaster is not in the ",Object(n.b)("strong",{parentName:"p"},"Ready")," state when calling this method (e.g: it is ",Object(n.b)("strong",{parentName:"p"},"Executing"),"), the broadcaster will forcefully transition to the Ready state then begin orderly shutdown from there.)"),Object(n.b)("h3",null,"Starting the live stream"),Object(n.b)("p",null,"When the SDK instance is in the ",Object(n.b)("strong",{parentName:"p"},"Ready")," state it is possible to start the actual broadcast (a.k.a live stream). At this time captured frames are encoded and sent to IBM’s servers, and your viewers can join in on your session. The instance can be started using:"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Kotlin")),Object(n.b)("pre",null,Object(n.b)("code",o({parentName:"pre"},{className:"language-kotlin"}),"androidBroadcaster.startBroadcast()\n")),Object(n.b)("p",null,"This call will start all the required components, like the encoders, and joins IBM servers so it can send data. This signal makes the SDK transition through the following states:"),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},"Ready -> Starting -> Executing")),Object(n.b)("p",null,"The API is symmetric, to stop the ongoing broadcast (and return to only showing the preview) you can call:"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Kotlin")),Object(n.b)("pre",null,Object(n.b)("code",o({parentName:"pre"},{className:"language-kotlin"}),"androidBroadcaster.stopBroadcast()\n")),Object(n.b)("p",null,"This will transition the SDK instance through the following states:"),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},"Executing -> Stopping -> Ready")),Object(n.b)("h3",null,"Cleaning up resources"),Object(n.b)("p",null,"When the SDK instance is known to be not required anymore, you should tear it down comepletely by calling:"),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Kotlin")),Object(n.b)("pre",null,Object(n.b)("code",o({parentName:"pre"},{className:"language-kotlin"}),"androidBroadcaster.destroy()\n")),Object(n.b)("p",null,"This method is actually the “other-end” of the constructor call. This method should be used when the broadcaster is ",Object(n.b)("strong",{parentName:"p"},"Uninitialized"),", but the method will try and wait a bit for components to finish if used otherwise."),Object(n.b)("h2",null,"Step 9: Handle broadcaster callbacks"),Object(n.b)("p",null,"The SDK has multiple listeners (some of them mandatory, some optional) that communicate different kinds of states and events."),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Please note"),": The threading model of the callbacks is that you always receive the callbacks from the same thread (",Object(n.b)("inlineCode",{parentName:"p"},"Looper")," actually) on which the ",Object(n.b)("inlineCode",{parentName:"p"},"AndroidBroadcaster")," instance has been created. Unless upon creating the ",Object(n.b)("inlineCode",{parentName:"p"},"AndroidBroadcaster")," you supply another ",Object(n.b)("inlineCode",{parentName:"p"},"Looper")," for the callbacks via the ",Object(n.b)("inlineCode",{parentName:"p"},"callbackLooper")," parameter."),Object(n.b)("h3",null,"State change callbacks"),Object(n.b)("p",null,"To receive state change callbacks register a ",Object(n.b)("inlineCode",{parentName:"p"},"Broadcaster.LifeCycleListener")," when creating the ",Object(n.b)("inlineCode",{parentName:"p"},"AndroidBroadcaster")," instance. This way you will be notified whenever there is a change in the broadcaster’s state."),Object(n.b)("p",null,"The list of possible state are:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Uninitialized")," via ",Object(n.b)("inlineCode",{parentName:"li"},"onUninitialized()"),": The state of the instance when it’s been just created, or components had been released by ",Object(n.b)("inlineCode",{parentName:"li"},"releaseComponents()"),". In this state the broadcaster is at rest; no data is being captured, no processing being done, resources are not held. (Except an idle worker thread that can be disposed of by calling ",Object(n.b)("inlineCode",{parentName:"li"},"destroy()"),".)"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Preparing")," via ",Object(n.b)("inlineCode",{parentName:"li"},"onPreparing()"),": The state of the instance when it’s received a ",Object(n.b)("inlineCode",{parentName:"li"},"prepareComponents()")," call, components are being prepared. This is a transient state, the SDK will transition to another state soon, the target state is ",Object(n.b)("em",{parentName:"li"},"Ready")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Ready")," via ",Object(n.b)("inlineCode",{parentName:"li"},"onReady()"),": The state of the instance when components had been prepared, and the preview is showing. In this state certain resources are actively used (i.e: Camera), but no encoding or data sending happens."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Starting")," via ",Object(n.b)("inlineCode",{parentName:"li"},"onStarting()"),": The state of the instance when it’s received a ",Object(n.b)("inlineCode",{parentName:"li"},"startBroadcast()")," call while previously being in the ",Object(n.b)("em",{parentName:"li"},"Ready")," state. This is a transient state, the SDK will transition to another state soon, the target state is ",Object(n.b)("em",{parentName:"li"},"Executing")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Executing")," via ",Object(n.b)("inlineCode",{parentName:"li"},"onExecuting()"),": The state of the instance when the broadcast is running. In this state all required resources are actively used (i.e: Camera, AudioRecorder, Encoders, Network), audio / video data is being encoded on-the-fly and sent to IBM’s servers."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Stopping")," via ",Object(n.b)("inlineCode",{parentName:"li"},"onStopping()"),": The state of the instance when it’s received a ",Object(n.b)("inlineCode",{parentName:"li"},"stopBroadcast()")," while being in the ",Object(n.b)("em",{parentName:"li"},"Executing")," state. This is a transient state, the SDK will transition to another state soon. The target state is ",Object(n.b)("em",{parentName:"li"},"Ready"),", where the preview will show again. Please note that in this state the buffers are being emptied: already recorded data is being encoded and transmitted — which can take a few seconds, depending on network speed"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Releasing")," via ",Object(n.b)("inlineCode",{parentName:"li"},"onReleasing()"),": The state of the instance when it’s received a ",Object(n.b)("inlineCode",{parentName:"li"},"releaseComponents()")," call while being in or anywhere “after” the ",Object(n.b)("em",{parentName:"li"},"Ready")," state. This is a transient state, the SDK will transition to another state soon. The target state is ",Object(n.b)("em",{parentName:"li"},"Uninitialized"),", where resources are released")),Object(n.b)("h3",null,"Error event listener"),Object(n.b)("p",null,"To receive the error events that are possibly occurring inside the broadcaster, you need to register an ",Object(n.b)("inlineCode",{parentName:"p"},"AndroidBroadcasterErrorListener")," when creating the ",Object(n.b)("inlineCode",{parentName:"p"},"AndroidBroadcaster")," instance."),Object(n.b)("p",null,"The list of possible error events are:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"AudioRecorderInitializationError"),": Received when the AudioRecorder could not be initialized, the accompanying message contains the reason"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"AudioRecorderFailure"),": Received when the AudioRecorder encounters an error during recording for some reason"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"CameraError"),": Received when the Camera2 API encounters an error or an unexpected behaviour is reported from the API, the accompanying ",Object(n.b)("inlineCode",{parentName:"li"},"Camera2Error")," object contains the reason reported by Android’s Camera2 API"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"CodecError"),": Received when one of the active codecs had thrown an exception while encoding the incoming frames (audio or video). The accompanying ",Object(n.b)("inlineCode",{parentName:"li"},"codecName")," String represents which Codec is involved, the ",Object(n.b)("inlineCode",{parentName:"li"},"message")," parameter contains the reason"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"EncoderError"),": Received when either the encoder could not be configured with the requested details or when the encoder’s internal state machine had thrown an error"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"ConnectionError"),": Received when a network related error is encountered in the underlying RTMP layer"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"BroadcastOverride"),": Received when the current broadcast session has been terminated because another broadcaster client took over your channel"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"RTMPRejectError"),": Received when the RTMP connection has been rejected by IBM’s servers, the accompanying String contains the reason"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"IngestSettingsLoaderError"),": Received when the mandatory configuration could not be retrieved from IBM’s servers for any reason")),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Please note"),": Upon receiving any of the above errors the broadcaster will transition to the ",Object(n.b)("em",{parentName:"p"},"Uninitialized")," state."),Object(n.b)("h3",null,"Camera event listener"),Object(n.b)("p",null,"To receive events regarding the used camera, you need to register a ",Object(n.b)("inlineCode",{parentName:"p"},"Camera2Listener")," when creating the ",Object(n.b)("inlineCode",{parentName:"p"},"AndroidBroadcaster")," instance. However this listener is considered as providing camera related optional meta information. In a normal use-case you will not care about these events, and it is perfectly fine to leave it as default."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"onCameraOpened(cameraId)"),": Received when the selected camera is opened, both while watching preview and broadcasting. The parameter is the String id of the camera, provided by the Android framework."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"onCameraClosed(cameraId)"),": Received when the selected camera is closed. The parameter is the String id of the camera, provided by the Android framework.")))}b.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-broadcaster-sdk-android-development-process-mdx-9e01caaad5bc95b3286d.js.map