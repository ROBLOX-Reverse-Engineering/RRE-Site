# What are Join Scripts?

## Introduction

Join scripts are lua scripts/json used by the Roblox client (and briefly the studio) to connect to a game server.

Roblox gathers the script from their online APIs.[^1] You can define the join script url using the command line argument `-j` or `--joinscripturl` which were introduced in 2016. (There were earlier forms of the joinscript argument for example `-script`.)

To prevent malicious code, Roblox uses [signatures](/Client Security/Signatures) to verify the authenticity of the content.

## Specification
There are two types of join scripts — [Lua](#lua) and [JSON](#json).
### Lua

Lua join scripts are lua scripts that contained the function calls to join.

In September 2014, lua join scripts were removed in favor of [JSON join scripts](#json).

### JSON

JSON join scripts are [JSONs](https://en.wikipedia.org/wiki/JSON) that contain everything the client needs to connect (IPs, ports, place id, etc).

The migration to JSON was part of the major client security overhaul which was removing the Lua Compiler from the client.

[^1]: The originally URL was https://www.roblox.com/Game/Join.ashx