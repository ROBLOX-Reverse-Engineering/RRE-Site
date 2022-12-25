# What are signatures?

## Introduction

Signatures are another means of security Roblox uses to prevent any unauthorized tampering with external requests from Roblox Servers.

Traditionally, signatures are, as the name suggests, a method to determine the actual author/sender of an article.

In today's world, digital signatures are analogous (to traditional signatures) — They utilize mathematical algorithms to validate the authenticity of data.[^1]

This graph demonstrates the signing process conceptionally:[^2]
```mermaid
flowchart LR
    id1[(Data)]-->id2[Sign]---id3>Private Key]
    id2-->id7[(Signed Data)]-->id5
    id6>Public Key]---id5[Verify]-->id4[(Data)]
```

## Client Signatures

Roblox uses (and *used*) signatures for a multitude of things including but not limited to:
    
- [JoinScripts](/Client Security/JoinScripts)
- Online CoreScripts (2010-2014)<sub><sup>[Citation needed]</sup></sub>
- BuiltInPlugins[^3]

### Specification
Roblox uses the [RSA](https://en.wikipedia.org/wiki/RSA_(cryptosystem)) algorithm (1024-bits) with X509 and PKCS7 encoding.

Signature wrappers have differed between the years but here are the primary forms:

- `%DATA%` (2010-2013)
- `--rbxsig%DATA%` (2013-2020)
- `--rbxsig2%DATA%` (Since 2018)
- `--rbxsig4%DATA%` (Since 2020)

(**DATA** refers to the actual signature)


<h3 id="see-also">See Also:</h3>
- [Generating a public/private key](/Extras/KeyGeneration)
- [JoinScripts](/Client Features/JoinScripts)

[^1]: More Information: [https://www.cisa.gov/uscert/ncas/tips/ST04-018](https://www.cisa.gov/uscert/ncas/tips/ST04-018)
[^2]: Signed data goes from server to client then which the client verifies it.
[^3]: Signed BuiltInPlugins were introduced in late 2019 in the form of *.sig files