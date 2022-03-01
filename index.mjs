// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-array@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-contains@esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/array-int32@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/array-uint32@esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-arcsine@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-bernoulli@esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-beta@esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-betaprime@esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-binomial@esm/index.mjs";import j from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-box-muller@esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-cauchy@esm/index.mjs";import c from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-chi@esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-chisquare@esm/index.mjs";import b from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-cosine@esm/index.mjs";import f from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-discrete-uniform@esm/index.mjs";import g from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-erlang@esm/index.mjs";import y from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-exponential@esm/index.mjs";import v from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-f@esm/index.mjs";import x from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-frechet@esm/index.mjs";import u from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-gamma@esm/index.mjs";import w from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-geometric@esm/index.mjs";import k from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-gumbel@esm/index.mjs";import q from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-hypergeometric@esm/index.mjs";import z from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-improved-ziggurat@esm/index.mjs";import A from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-invgamma@esm/index.mjs";import P from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-kumaraswamy@esm/index.mjs";import G from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-laplace@esm/index.mjs";import I from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-levy@esm/index.mjs";import N from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-logistic@esm/index.mjs";import R from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-lognormal@esm/index.mjs";import U from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-minstd@esm/index.mjs";import B from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-minstd-shuffle@esm/index.mjs";import C from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-mt19937@esm/index.mjs";import D from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-negative-binomial@esm/index.mjs";import E from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-normal@esm/index.mjs";import F from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-pareto-type1@esm/index.mjs";import H from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-poisson@esm/index.mjs";import J from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-randi@esm/index.mjs";import K from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-randn@esm/index.mjs";import L from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-randu@esm/index.mjs";import M from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-rayleigh@esm/index.mjs";import O from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-t@esm/index.mjs";import Q from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-triangular@esm/index.mjs";import S from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-uniform@esm/index.mjs";import T from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-weibull@esm/index.mjs";var V=d,W=n,X=a,Y=o,Z=l,$=j,_=p,ss=c,ts=h,es=b,rs=f,ms=g,is=y,ds=v,ns=x,as=u,os=w,ls=k,js=q,ps=z,cs=A,hs=P,bs=G,fs=I,gs=N,ys=R,vs=U,xs=B,us=C,ws=D,ks=E,qs=F,zs=H,As=J,Ps=K,Gs=L,Is=M,Ns=O,Rs=Q,Us=S,Bs=T,Cs={};Cs.arcsine=V.factory,Cs.bernoulli=W.factory,Cs.beta=X.factory,Cs.betaprime=Y.factory,Cs.binomial=Z.factory,Cs["box-muller"]=$.factory,Cs.cauchy=_.factory,Cs.chi=ss.factory,Cs.chisquare=ts.factory,Cs.cosine=es.factory,Cs["discrete-uniform"]=rs.factory,Cs.erlang=ms.factory,Cs.exponential=is.factory,Cs.f=ds.factory,Cs.frechet=ns.factory,Cs.gamma=as.factory,Cs.geometric=os.factory,Cs.gumbel=ls.factory,Cs.hypergeometric=js.factory,Cs["improved-ziggurat"]=ps.factory,Cs.invgamma=cs.factory,Cs.kumaraswamy=hs.factory,Cs.laplace=bs.factory,Cs.levy=fs.factory,Cs.logistic=gs.factory,Cs.lognormal=ys.factory,Cs.minstd=vs.factory,Cs["minstd-shuffle"]=xs.factory,Cs.mt19937=us.factory,Cs["negative-binomial"]=ws.factory,Cs.normal=ks.factory,Cs["pareto-type1"]=qs.factory,Cs.poisson=zs.factory,Cs.randi=As.factory,Cs.randn=Ps.factory,Cs.randu=Gs.factory,Cs.rayleigh=Is.factory,Cs.t=Ns.factory,Cs.triangular=Rs.factory,Cs.uniform=Us.factory,Cs.weibull=Bs.factory;var Ds=Cs,Es=s.isPrimitive,Fs=t,Hs=e,Js=r,Ks=Ds,Ls={Int32Array:m,Uint32Array:i},Ms=["randi","randn","randu"];var Os=function(s,t){var e,r,m,i,d;if(t&&"PRNG"===t.type&&Es(t.name)&&Fs(t.state)&&Hs(t.params)&&Es(t.state.type)&&Hs(t.state.data)&&(r={},void 0===(e=Ks[t.name])&&(d=t.name.split("-"),Js(Ms,d[0])&&(e=Ks[d[0]],r.name=d.slice(1).join("-"))),e&&(i=Ls[t.state.type]))){r.state=new i(t.state.data),(m=t.params.slice()).push(r);try{return e.apply(null,m)}catch(s){}}return t};export{Os as default};
//# sourceMappingURL=index.mjs.map
