# DMC Token Smart Contract #

DMC Token Smart Contract.
Dumpling Mining Company UG (Haftungsbeschränkt)


## How to Build ##

In order to build the DMC Token Smart Contract you need the
following software to be properly installed on your system:

1. nodejs 6.11.0+ 
2. testrpc 4.0.1+

To build the DMC Token Smart Contract, do the following:

1. go to the root folder of the DMCToken repository (sources branch)
2. run the following command: `npm install`
3. run the following command: `truffle compile`
4. After successful build, `build\contracts` directory will contain the compiled contract

## How to Run Tests ##

After successful build you may want to start testrpc and than run tests via `npm test` command.
