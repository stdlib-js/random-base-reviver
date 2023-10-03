// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import{isPrimitive as s}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@v0.1.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@v0.1.0-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-array@v0.1.0-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-contains@esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/array-int32@v0.1.0-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/array-uint32@v0.1.0-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-arcsine@v0.1.0-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-bernoulli@v0.1.0-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-beta@v0.1.0-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-betaprime@v0.1.0-esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-binomial@v0.1.0-esm/index.mjs";import j from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-box-muller@v0.1.0-esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-cauchy@v0.1.0-esm/index.mjs";import c from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-chi@v0.1.0-esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-chisquare@v0.1.0-esm/index.mjs";import b from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-cosine@v0.1.0-esm/index.mjs";import v from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-discrete-uniform@v0.1.0-esm/index.mjs";import f from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-erlang@v0.1.0-esm/index.mjs";import g from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-exponential@v0.1.0-esm/index.mjs";import y from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-f@v0.1.0-esm/index.mjs";import x from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-frechet@v0.1.0-esm/index.mjs";import u from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-gamma@v0.1.0-esm/index.mjs";import w from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-geometric@v0.1.0-esm/index.mjs";import k from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-gumbel@v0.1.0-esm/index.mjs";import q from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-hypergeometric@v0.1.0-esm/index.mjs";import z from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-improved-ziggurat@v0.1.0-esm/index.mjs";import A from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-invgamma@v0.1.0-esm/index.mjs";import G from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-kumaraswamy@v0.1.0-esm/index.mjs";import I from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-laplace@v0.1.0-esm/index.mjs";import N from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-levy@v0.1.0-esm/index.mjs";import P from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-logistic@v0.1.0-esm/index.mjs";import R from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-lognormal@v0.1.0-esm/index.mjs";import U from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-minstd@v0.1.0-esm/index.mjs";import B from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-minstd-shuffle@v0.1.0-esm/index.mjs";import C from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-mt19937@v0.1.0-esm/index.mjs";import D from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-negative-binomial@v0.1.0-esm/index.mjs";import E from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-normal@v0.1.0-esm/index.mjs";import F from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-pareto-type1@v0.1.0-esm/index.mjs";import H from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-poisson@v0.1.0-esm/index.mjs";import J from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-randi@v0.1.0-esm/index.mjs";import K from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-randn@v0.1.0-esm/index.mjs";import L from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-randu@v0.1.0-esm/index.mjs";import M from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-rayleigh@v0.1.0-esm/index.mjs";import O from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-t@v0.1.0-esm/index.mjs";import Q from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-triangular@v0.1.0-esm/index.mjs";import S from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-uniform@v0.1.0-esm/index.mjs";import T from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-weibull@v0.1.0-esm/index.mjs";var V={};V.arcsine=d.factory,V.bernoulli=n.factory,V.beta=a.factory,V.betaprime=o.factory,V.binomial=l.factory,V["box-muller"]=j.factory,V.cauchy=p.factory,V.chi=c.factory,V.chisquare=h.factory,V.cosine=b.factory,V["discrete-uniform"]=v.factory,V.erlang=f.factory,V.exponential=g.factory,V.f=y.factory,V.frechet=x.factory,V.gamma=u.factory,V.geometric=w.factory,V.gumbel=k.factory,V.hypergeometric=q.factory,V["improved-ziggurat"]=z.factory,V.invgamma=A.factory,V.kumaraswamy=G.factory,V.laplace=I.factory,V.levy=N.factory,V.logistic=P.factory,V.lognormal=R.factory,V.minstd=U.factory,V["minstd-shuffle"]=B.factory,V.mt19937=C.factory,V["negative-binomial"]=D.factory,V.normal=E.factory,V["pareto-type1"]=F.factory,V.poisson=H.factory,V.randi=J.factory,V.randn=K.factory,V.randu=L.factory,V.rayleigh=M.factory,V.t=O.factory,V.triangular=Q.factory,V.uniform=S.factory,V.weibull=T.factory;var W={Int32Array:m,Uint32Array:i},X=["randi","randn","randu"];function Y(m,i){var d,n,a,o,l;if(i&&"PRNG"===i.type&&s(i.name)&&t(i.state)&&e(i.params)&&s(i.state.type)&&e(i.state.data)&&(n={},void 0===(d=V[i.name])&&(l=i.name.split("-"),r(X,l[0])&&(d=V[l[0]],n.name=l.slice(1).join("-"))),d&&(o=W[i.state.type]))){n.state=new o(i.state.data),(a=i.params.slice()).push(n);try{return d.apply(null,a)}catch(s){}}return i}export{Y as default};
//# sourceMappingURL=index.mjs.map
