const i={config:{name:"User Access Control",type:"process",targetVer:"1.0.0-indev.0"},run:async a=>{if(Object.keys(a.data).length<=0)return;const t=a.data.process.process,r=a.data.executable;return await new Promise(o=>{a.loadLibrary("lib/WindowManager").then(async n=>{let e="Unknown action";switch(a.data.type){case"launch":{e=`${t.config.name} wants to launch ${r.config.name}`;break}case"kill":{e=`${t.config.name} wants to kill ${a.data.name}`;break}case"fs":{e=`${t.config.name} wants to modify/access ${a.data.path}`;break}}n.createModal("allow","User Account Control",e,a).then(async({value:c,win:s})=>{o(!!c)}).catch(c=>console.error(c))}).catch(n=>console.error(n))})}};export{i as default};
