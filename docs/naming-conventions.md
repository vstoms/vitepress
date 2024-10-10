# Naming conventions

The platform team recommends that teams develop a naming convention for the Azure resources they provision. This will ensure consistency across the environment and will help the team operate in a good manner.

Please have a look at the [Microsoft recommendations](https://docs.microsoft.com/en-us/azure/architecture/best-practices/naming-conventions ) for naming Azure resources.

## Platform team naming convensions

The platform team uses the following naming standard:

* [Management Groups](#management-groups)
* [Subscriptions](#subscriptions)
* [Policy Definitions and Policy Assignments](#policy-definitions-and-policy-assignments)
* [Role Definitions](#role-definitions)
* [Resource Groups](#resource-groups)
* [Resources](#resources)
* [Service Principals and User Managed Identities](#service-principals-and-user-managed-identities)
* [GitHub repo and naming of files and folders](#github-repo-and-naming-of-files-and-folders)

## Management Groups

Management groups should be named in such a way to make it easy to understand where in the hierarchy you are located. This can be achieved by following the rule of always starting a name by prefixing it by the parent management group name. *No spaces allowed in name*. Use CamelCase and `-` between the prefix and the group name.

Examples:

```sh
Level one:   FFT
Level two:   FFT-Classic
             FFT-Standalone
Level three: FFT-Classic-Workload
```

## Subscriptions

Naming subscriptions also consist of two parts, a prefix and a name that gives a hint to which production line this is for. The prefix is very simple and is on the form `Sxxx` where `S` is short for Subscription and `xxx` is a running number. For the Solum Development and Quality Assurance environment, the prefix `Qxxx` is used. Use CamelCase and `-` between prefix and the actual name. It is also okay to use `-` for spaces in the name. *No spaces allowed in name*

Examples:

```sh
S006-Sandbox-IT-ES
S007-Sandbox-IT-PLA
```

## Policy Definitions and Policy Assignments

Policies, policy sets, and policy assignments should be named using a prefix as stated below and a meaningful name. The name should use CamelCase and `-` is allowed as a replacement for space. *No spaces allowed in name*.

* FP - For policy definitions (Forsvarets Felles Tjenester Policy)
* FPS - For policy set definitions (Forsvarets Felles Tjenester Policy Set)
* FP - Policy assignment (Forsvarets Felles Tjenester Policy)
* FPS - Policy Set assignment (Forsvarets Felles Tjenester Policy Set)

Examples:

```sh
OPS-Enable-VM-Monitor
OP-Not-Allowed-Resources
```

### Role Definitions

Name of custom roles should start with `FFT` followed by a meaningful description of the role. 

Examples:

```sh
FFT Contributor
FFT Owner
```

## Resource Groups

Naming resource groups follows the standard for subscriptions and consist of two parts, a prefix and a meaningful name. The prefix used is the same prefix as used for the subscription where the resource group is created. Use lower case for name and `-` for spaces if needed. *No spaces allowed in name*. For network resourcegroups, the prefix must include the location for the network resources.

Examples:

```sh
S006-log
S006-NE-network
```

## Resources

Resources (artefacts) should be named with the same prefix as used for the resource group and should have a meaningful name. The name should be aligned or typically use the Azure Resource Type as the basis for the name. If multiple instances are deployed, you should append meaningful descriptions. Use lower case for name and `-` for spaces if needed. *No spaces allowed in name*

Examples:

```sh
S006-NE-virtual-network
S006-NE-virtual-network-failover
S006-log-analytics
S006-automation-account
```

Some resources require globally unique names and to minimize the risk of naming collisions we used the 8 last digits of the subscription ID as part of the name.

Examples:

```sh
Subscription ID: cf4356ce-9196-4d1f-8aeb-2d7a41f3b2c6

S006-2d7a41f3b2c6-log-analytics  # Here '2d7a41f3b2c6' represents the last 8 digits of the subscription ID
S0062d7a41fgghc6storage          # Name of storage account does not allow special characters like '-'
```

## Service Principals and User Managed Identities

Service principals and user managed identities should be named with a prefix of `FFT` and a meaningful description of the intended use. The name should use CamelCase and `-` is allowed as a replacement for space. *No spaces allowed in name*.

Examples:

```sh
FF-Pipeline-Blueprint-Build-uami
DD-Enforce-ASC
```

## GitHub repo and naming of files and folders

Naming of files in our repo must follow the requirements mandated by the different pipelines that have been developed to process those files. All source code should be located in the `src` folder in the repo. Under the `src` folder we have the following folders:

* `platform` for files to be deployed to the Azure platform
* `pipelines` all pipelines developed for the automated deployment of Azure resources
* `services` all related platform services

For naming requirements please have a look at the requirements for each specific pipeline:
