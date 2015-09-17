tc-warpgate-node
===========

A node-wrapper around the very cool qdisc trafficshaping visualizer tc-warpgate.

if you don't need the node-wrapper, get the original from https://github.com/DevCybran/tc-warpgate.


## Features

* realtime monitoring for tc
* visualization of qdiscs and classes (and htb rate and ceil)
* configurable interface-specific maximum throughput
* commenting qdiscs and classes
* view qdisc and class statistics
* persistent storage of user-defined settings

## HowTo

assuming you have nodejs and php (command-line interpreter) already set up...
* download/clone
* run 'npm i'
* run 'node app'
* access the machine at port 3001
* (adapt to your needs)
