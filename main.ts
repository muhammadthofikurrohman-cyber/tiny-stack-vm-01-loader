const{mkdirSync:A,readdirSync:B,readFileSync:C,writeFileSync:D}=require("node:fs");
const I=process.env.MAKEFUN_INPUT_DIR||"/input",O=process.env.MAKEFUN_OUTPUT_DIR||"/output";
function run(p,q){
let s=0,c=0,pc=0,n=0,i=0,l=0,e=0;
const d=[],K=[],M=new Int32Array(256),b=new Uint8Array(65536);
const F=x=>{throw x};
try{for(;;){
if(n==1e6)F(10);
if(pc<0||pc>=p.length)F(9);
let o=p[pc],w=o==1?1:o==2?4:o>47&&o<52?2:0;
if(pc+w>=p.length)F(9);
n++;
let x=pc+1+w;
pc=x;
if(o>15&&o<35&&o!=23&&o!=27&&o!=31){
if(s<2)F(2);
let y=d[s-1],a=d[s-2],r;
if(o>18&&o<23&&!y)F(4);
if(o==16)r=a+y|0;else if(o==17)r=a-y|0;else if(o==18)r=Math.imul(a,y);else if(o==19)r=a==-2147483648&&y==-1?a:a/y|0;else if(o==20)r=y==-1?0:a%y;else if(o==21)r=(a>>>0)/(y>>>0)|0;else if(o==22)r=(a>>>0)%(y>>>0)|0;else if(o==24)r=a&y;else if(o==25)r=a|y;else if(o==26)r=a^y;else if(o==28)r=a<<(y&31);else if(o==29)r=a>>(y&31);else if(o==30)r=a>>>(y&31)|0;else if(o==32)r=a==y?1:0;else if(o==33)r=a<y?1:0;else r=(a>>>0)<(y>>>0)?1:0;
s-=2;d[s++]=r;continue}
switch(o){
case 0:F(0);
case 1:if(s>255)F(3);d[s++]=(p[x-1]<<24)>>24;break;
case 2:if(s>255)F(3);d[s++]=p[x-4]|p[x-3]<<8|p[x-2]<<16|p[x-1]<<24;break;
case 3:if(s<1)F(2);s--;break;
case 4:if(s<1||s>255)F(s<1?2:3);d[s]=d[s-1];s++;break;
case 5:if(s<2)F(2);{let t=d[s-1];d[s-1]=d[s-2];d[s-2]=t}break;
case 6:if(s<2||s>255)F(s<2?2:3);d[s]=d[s-2];s++;break;
case 7:if(s<3)F(2);{let a=d[s-3];d[s-3]=d[s-2];d[s-2]=d[s-1];d[s-1]=a}break;
case 23:case 27:if(s<1)F(2);d[s-1]=o==23?-d[s-1]|0:~d[s-1];break;
case 48:case 49:case 50:if(o>48&&s<1)F(2);{let r=((p[x-2]|p[x-1]<<8)<<16)>>16;if(o==48||(o==49)==(d[--s]==0))pc=x+r}break;
case 51:if(c==64)F(7);K[c++]=x;pc=p[x-2]|p[x-1]<<8;break;
case 52:if(!c)F(8);pc=K[--c];break;
case 64:case 65:if(s<(o==64?1:2))F(2);{let a=d[s-1];if(a<0||a>255)F(6);if(o==64)d[s-1]=M[a];else{M[a]=d[s-2];s-=2}}break;
case 80:if(s<1)F(2);{let t=""+d[s-1];if(l+t.length>65536)F(11);s--;b.set(Buffer.from(t),l);l+=t.length}break;
case 81:if(s<1)F(2);if(l>65535)F(11);b[l++]=d[--s]&255;break;
case 82:if(s>255)F(3);d[s++]=i<q.length?q[i++]:-1;break;
case 83:if(s<1)F(2);F(d[--s]&255);
default:F(5)}
}}catch(x){e=x}
return{o:b.slice(0,l),e}}
for(let g of B(I).sort()){let f=I+"/"+g+"/",h=O+"/"+g+"/",r=run(C(f+"program.bin"),C(f+"input.bin"));A(h,{recursive:true});D(h+"stdout.bin",r.o);D(h+"exit.txt",""+r.e)}
