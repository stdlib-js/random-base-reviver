"use strict";var p=function(c,a){return function(){return a||c((a={exports:{}}).exports,a),a.exports}};var y=p(function(vr,u){
var m=require('@stdlib/random-base-arcsine/dist'),l=require('@stdlib/random-base-bernoulli/dist'),d=require('@stdlib/random-base-beta/dist'),b=require('@stdlib/random-base-betaprime/dist'),h=require('@stdlib/random-base-binomial/dist'),A=require('@stdlib/random-base-box-muller/dist'),R=require('@stdlib/random-base-cauchy/dist'),P=require('@stdlib/random-base-chi/dist'),x=require('@stdlib/random-base-chisquare/dist'),w=require('@stdlib/random-base-cosine/dist'),G=require('@stdlib/random-base-discrete-uniform/dist'),N=require('@stdlib/random-base-erlang/dist'),S=require('@stdlib/random-base-exponential/dist'),_=require('@stdlib/random-base-f/dist'),j=require('@stdlib/random-base-frechet/dist'),k=require('@stdlib/random-base-gamma/dist'),E=require('@stdlib/random-base-geometric/dist'),I=require('@stdlib/random-base-gumbel/dist'),O=require('@stdlib/random-base-hypergeometric/dist'),T=require('@stdlib/random-base-improved-ziggurat/dist'),U=require('@stdlib/random-base-invgamma/dist'),Y=require('@stdlib/random-base-kumaraswamy/dist'),z=require('@stdlib/random-base-laplace/dist'),B=require('@stdlib/random-base-levy/dist'),C=require('@stdlib/random-base-logistic/dist'),D=require('@stdlib/random-base-lognormal/dist'),W=require('@stdlib/random-base-minstd/dist'),F=require('@stdlib/random-base-minstd-shuffle/dist'),H=require('@stdlib/random-base-mt19937/dist'),J=require('@stdlib/random-base-negative-binomial/dist'),K=require('@stdlib/random-base-normal/dist'),L=require('@stdlib/random-base-pareto-type1/dist'),M=require('@stdlib/random-base-poisson/dist'),Q=require('@stdlib/random-base-randi/dist'),V=require('@stdlib/random-base-randn/dist'),X=require('@stdlib/random-base-randu/dist'),Z=require('@stdlib/random-base-rayleigh/dist'),$=require('@stdlib/random-base-t/dist'),rr=require('@stdlib/random-base-triangular/dist'),ar=require('@stdlib/random-base-uniform/dist'),er=require('@stdlib/random-base-weibull/dist'),r={};r.arcsine=m.factory;r.bernoulli=l.factory;r.beta=d.factory;r.betaprime=b.factory;r.binomial=h.factory;r["box-muller"]=A.factory;r.cauchy=R.factory;r.chi=P.factory;r.chisquare=x.factory;r.cosine=w.factory;r["discrete-uniform"]=G.factory;r.erlang=N.factory;r.exponential=S.factory;r.f=_.factory;r.frechet=j.factory;r.gamma=k.factory;r.geometric=E.factory;r.gumbel=I.factory;r.hypergeometric=O.factory;r["improved-ziggurat"]=T.factory;r.invgamma=U.factory;r.kumaraswamy=Y.factory;r.laplace=z.factory;r.levy=B.factory;r.logistic=C.factory;r.lognormal=D.factory;r.minstd=W.factory;r["minstd-shuffle"]=F.factory;r.mt19937=H.factory;r["negative-binomial"]=J.factory;r.normal=K.factory;r["pareto-type1"]=L.factory;r.poisson=M.factory;r.randi=Q.factory;r.randn=V.factory;r.randu=X.factory;r.rayleigh=Z.factory;r.t=$.factory;r.triangular=rr.factory;r.uniform=ar.factory;r.weibull=er.factory;u.exports=r
});var s=p(function(qr,q){
var g=require('@stdlib/assert-is-string/dist').isPrimitive,ir=require('@stdlib/assert-is-plain-object/dist'),f=require('@stdlib/assert-is-array/dist'),tr=require('@stdlib/assert-contains/dist'),nr=require('@stdlib/array-int32/dist'),or=require('@stdlib/array-uint32/dist'),v=y(),cr={Int32Array:nr,Uint32Array:or},pr=["randi","randn","randu"];function ur(c,a){var e,i,n,o,t;if(a&&a.type==="PRNG"&&g(a.name)&&ir(a.state)&&f(a.params)&&g(a.state.type)&&f(a.state.data)&&(i={},e=v[a.name],e===void 0&&(t=a.name.split("-"),tr(pr,t[0])&&(e=v[t[0]],i.name=t.slice(1).join("-"))),e&&(o=cr[a.state.type],o))){i.state=new o(a.state.data),n=a.params.slice(),n.push(i);try{return e.apply(null,n)}catch(gr){}}return a}q.exports=ur
});var yr=s();module.exports=yr;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map