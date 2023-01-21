/*
 @licstart  The following is the entire license notice for the JavaScript code in this file.

 The MIT License (MIT)

 Copyright (C) 1997-2020 by Dimitri van Heesch

 Permission is hereby granted, free of charge, to any person obtaining a copy of this software
 and associated documentation files (the "Software"), to deal in the Software without restriction,
 including without limitation the rights to use, copy, modify, merge, publish, distribute,
 sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all copies or
 substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING
 BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
 DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

 @licend  The above is the entire license notice for the JavaScript code in this file
*/
var NAVTREE =
[
  [ "ChimeraTK-ApplicationCore", "index.html", [
    [ "Conceptual overview", "conceptual_overview.html", [
      [ "Introduction", "conceptual_overview.html#Introduction", null ],
      [ "Application module", "conceptual_overview.html#conceptualOverview_ApplicationModule", null ],
      [ "Process variables and accessors", "conceptual_overview.html#conceptualOverview_ProcessVariable", [
        [ "Introduction", "conceptual_overview.html#conceptualOverview_ProcessVariable_intro", null ],
        [ "Push and poll transfer modes", "conceptual_overview.html#conceptualOverview_ProcessVariable_accessMode", null ],
        [ "Name and hierarchies", "conceptual_overview.html#conceptualOverview_ProcessVariable_hierarchy", null ],
        [ "Variable networks", "conceptual_overview.html#conceptualOverview_ProcessVariable_network", null ],
        [ "Type and meta information", "conceptual_overview.html#conceptualOverview_ProcessVariable_metainfo", null ]
      ] ],
      [ "Variable groups", "conceptual_overview.html#conceptualOverview_VariableGroup", null ],
      [ "Module groups", "conceptual_overview.html#conceptualOverview_ModuleGroup", null ],
      [ "Device modules", "conceptual_overview.html#conceptualOverview_DeviceModule", [
        [ "Triggers", "conceptual_overview.html#conceptualOverview_DeviceModule_trigger", null ]
      ] ],
      [ "Control system module", "conceptual_overview.html#conceptualOverview_ControlSystemModule", null ],
      [ "The Application", "conceptual_overview.html#conceptualOverview_Application", null ],
      [ "Process variable connections", "conceptual_overview.html#conceptualOverview_Connections", null ],
      [ "Fanouts", "conceptual_overview.html#conceptualOverview_FanOuts", null ]
    ] ],
    [ "Exception Handling", "exception_handling.html", [
      [ "Introduction", "exception_handling.html#exceptionHandling_Introduction", null ],
      [ "DataValidity", "exception_handling.html#exceptionHandling_DataValidity", null ]
    ] ],
    [ "ApplicationCore 2.x -> 3.0 migration guide", "migration_guide_v2_to_v3.html", [
      [ "General", "migration_guide_v2_to_v3.html#autotoc_md0", [
        [ "Old-style servers (defineConnections still overridden)", "migration_guide_v2_to_v3.html#autotoc_md1", null ],
        [ "New-style servers (no defineConnections)", "migration_guide_v2_to_v3.html#autotoc_md2", null ]
      ] ]
    ] ],
    [ "ConfigReader Module", "configreader.html", [
      [ "Example usage", "configreader.html#usage", null ],
      [ "XML file structure", "configreader.html#xmlstructure", null ]
    ] ],
    [ "Technical specification: Exception handling for device runtime errors V1.0", "spec_execption_handling.html", [
      [ "A. Introduction", "spec_execption_handling.html#spec_execptionHandling_intro", [
        [ "A.9 Special terminology used in this document", "spec_execption_handling.html#spec_exceptionHandling_intro_terminology", null ],
        [ "(*) Comments", "spec_execption_handling.html#spec_exceptionHandling_intro_comments", null ]
      ] ],
      [ "B. Behavioural description", "spec_execption_handling.html#spec_execptionHandling_behaviour", [
        [ "Runtime error handling", "spec_execption_handling.html#spec_exceptionHandling_behaviour_runtime_errors", null ],
        [ "Recovery", "spec_execption_handling.html#spec_execptionHandling_behaviour_recovery", null ],
        [ "Startup", "spec_execption_handling.html#spec_execptionHandling_behaviour_startup", null ],
        [ "Forced Recovery", "spec_execption_handling.html#spec_execptionHandling_behaviour_forced_recovery", null ],
        [ "(*) Comments", "spec_execption_handling.html#spec_execptionHandling_behaviour_comments", null ]
      ] ],
      [ "C. Implementation", "spec_execption_handling.html#spec_execptionHandling_high_level_implmentation", [
        [ "C.1 Internal interface between ExceptionHandlingDecorator and DeviceModule", "spec_execption_handling.html#spec_execptionHandling_high_level_implmentation_interface", [
          [ "(*) Comments", "spec_execption_handling.html#spec_execptionHandling_high_level_implmentation_interface_comments", null ]
        ] ],
        [ "C.2 ExceptionHandlingDecorator", "spec_execption_handling.html#spec_execptionHandling_high_level_implmentation_decorator", [
          [ "Structure", "spec_execption_handling.html#spec_execptionHandling_high_level_implmentation_decorator_structure", null ],
          [ "Behaviour", "spec_execption_handling.html#spec_execptionHandling_high_level_implmentation_decorator_behaviour", null ],
          [ "(*) Comments", "spec_execption_handling.html#spec_execptionHandling_high_level_implmentation_decorator_comments", null ]
        ] ],
        [ "C.3 DeviceModule", "spec_execption_handling.html#spec_execptionHandling_high_level_implmentation_deviceModule", [
          [ "(*) Comments", "spec_execption_handling.html#spec_execptionHandling_high_level_implmentation_deviceModule_comments", null ]
        ] ],
        [ "C.4 DeviceModule::reportException()", "spec_execption_handling.html#spec_execptionHandling_high_level_implmentation_reportException", [
          [ "(*) Comments", "spec_execption_handling.html#spec_execptionHandling_high_level_implmentation_reportException_comments", null ]
        ] ]
      ] ],
      [ "D. Known issues", "spec_execption_handling.html#spec_execptionHandling_known_issues", null ]
    ] ],
    [ "Technical specification: Propagation of initial values V1.0", "spec_initial_value_propagation.html", null ],
    [ "Technical specification: data validity propagation Specification version V1.0", "spec_data_validity_propagation.html", null ],
    [ "Technical specification: StatusAggregator", "spec__status_aggregator.html", [
      [ "Introduction", "spec__status_aggregator.html#autotoc_md46", null ],
      [ "High-level requirements", "spec__status_aggregator.html#autotoc_md47", [
        [ "A. Introduction", "spec_initial_value_propagation.html#autotoc_md19", null ],
        [ "B. Definitions", "spec_initial_value_propagation.html#autotoc_md20", null ],
        [ "C. High-level requirements", "spec_initial_value_propagation.html#autotoc_md21", [
          [ "(*) Comments", "spec_initial_value_propagation.html#autotoc_md22", null ]
        ] ],
        [ "D. Detailed requirements", "spec_initial_value_propagation.html#autotoc_md23", [
          [ "Comments", "spec_initial_value_propagation.html#autotoc_md24", null ]
        ] ],
        [ "E. Implementation", "spec_initial_value_propagation.html#autotoc_md25", [
          [ "NDRegisterAccessor implementations", "spec_initial_value_propagation.html#autotoc_md26", null ],
          [ "ApplicationModule", "spec_initial_value_propagation.html#autotoc_md27", null ],
          [ "ThreadedFanOut", "spec_initial_value_propagation.html#autotoc_md28", null ],
          [ "TriggerFanOut", "spec_initial_value_propagation.html#autotoc_md29", null ],
          [ "DeviceModule", "spec_initial_value_propagation.html#autotoc_md30", null ],
          [ "ExceptionHandlingDecorator", "spec_initial_value_propagation.html#autotoc_md31", null ],
          [ "Application", "spec_initial_value_propagation.html#autotoc_md32", null ],
          [ "ControlSystemAdapter", "spec_initial_value_propagation.html#autotoc_md33", null ],
          [ "ProcessArrays", "spec_initial_value_propagation.html#autotoc_md34", null ]
        ] ],
        [ "F. Known bugs [OUTDATED!!!]", "spec_initial_value_propagation.html#autotoc_md35", [
          [ "DeviceAccess interface", "spec_initial_value_propagation.html#autotoc_md36", null ],
          [ "NDRegisterAccessor implementations", "spec_initial_value_propagation.html#autotoc_md37", null ],
          [ "ApplicationModule / EntityOwner", "spec_initial_value_propagation.html#autotoc_md38", null ],
          [ "TriggerFanOut", "spec_initial_value_propagation.html#autotoc_md39", null ],
          [ "DeviceModule", "spec_initial_value_propagation.html#autotoc_md40", null ],
          [ "ExceptionHandlingDecorator", "spec_initial_value_propagation.html#autotoc_md41", null ],
          [ "VariableNetworkNode", "spec_initial_value_propagation.html#autotoc_md42", null ],
          [ "ControlSystemAdapter", "spec_initial_value_propagation.html#autotoc_md43", null ],
          [ "Non-memeber functions", "spec_initial_value_propagation.html#autotoc_md44", null ],
          [ "Documentation", "spec_initial_value_propagation.html#autotoc_md45", null ]
        ] ],
        [ "1. General idea", "spec_data_validity_propagation.html#autotoc_md3", [
          [ "Comments", "spec_data_validity_propagation.html#autotoc_md4", null ]
        ] ],
        [ "2. Technical implementation", "spec_data_validity_propagation.html#autotoc_md5", [
          [ "2.1 MetaDataPropagatingRegisterDecorator (*)", "spec_data_validity_propagation.html#autotoc_md6", null ],
          [ "2.2 removed", "spec_data_validity_propagation.html#autotoc_md7", null ],
          [ "2.3 ApplicationModule", "spec_data_validity_propagation.html#autotoc_md8", null ],
          [ "2.4 TriggerFanOut", "spec_data_validity_propagation.html#autotoc_md9", null ],
          [ "2.5 Interaction with exception handling", "spec_data_validity_propagation.html#autotoc_md10", null ],
          [ "2.6 Application class", "spec_data_validity_propagation.html#autotoc_md11", null ],
          [ "Comments:", "spec_data_validity_propagation.html#autotoc_md12", null ]
        ] ],
        [ "3. Implementation details", "spec_data_validity_propagation.html#autotoc_md13", null ],
        [ "4. Circular dependencies", "spec_data_validity_propagation.html#autotoc_md14", [
          [ "4.1 General behaviour", "spec_data_validity_propagation.html#autotoc_md15", [
            [ "Comments", "spec_data_validity_propagation.html#autotoc_md16", null ]
          ] ],
          [ "4.3 Technical implementation", "spec_data_validity_propagation.html#autotoc_md17", [
            [ "Comments", "spec_data_validity_propagation.html#autotoc_md18", null ]
          ] ]
        ] ],
        [ "R1.1 Automatic detection of instances", "spec__status_aggregator.html#autotoc_md48", null ],
        [ "R1.2 Priorization of status values", "spec__status_aggregator.html#autotoc_md49", null ],
        [ "Constraints and issues", "spec__status_aggregator.html#autotoc_md50", null ]
      ] ],
      [ "Implementation", "spec__status_aggregator.html#autotoc_md51", [
        [ "Requirements", "spec__status_aggregator.html#autotoc_md52", null ],
        [ "Constraints and issues", "spec__status_aggregator.html#autotoc_md53", null ]
      ] ]
    ] ],
    [ "Example 1: Application with two modules and two hardware devices", "example1.html", null ],
    [ "Example 2: Small but complete application with a proportional controller", "example2.html", null ],
    [ "Example 2a: Application with automation module", "example2a.html", null ],
    [ "Example 3: Minimal device server", "example3.html", null ],
    [ "spec_VersionPropagation", "spec__version_propagation.html", null ],
    [ "What's new in ApplicationCore 2.0", "whats_new__a_c_2_0.html", [
      [ "Initial value propagation", "whats_new__a_c_2_0.html#whats_new_2_0_initial_value", [
        [ "ApplicationModule", "spec__version_propagation.html#autotoc_md54", null ],
        [ "Transfer Groups", "spec__version_propagation.html#autotoc_md55", null ],
        [ "Required changes to existing applications", "whats_new__a_c_2_0.html#whats_new_2_0_initial_value_app_change", null ]
      ] ]
    ] ],
    [ "Status Monitor", "statusmonitordoc.html", null ],
    [ "Todo List", "todo.html", null ],
    [ "Namespaces", "namespaces.html", [
      [ "Namespace List", "namespaces.html", "namespaces_dup" ],
      [ "Namespace Members", "namespacemembers.html", [
        [ "All", "namespacemembers.html", null ],
        [ "Functions", "namespacemembers_func.html", null ],
        [ "Variables", "namespacemembers_vars.html", null ],
        [ "Typedefs", "namespacemembers_type.html", null ],
        [ "Enumerations", "namespacemembers_enum.html", null ]
      ] ]
    ] ],
    [ "Classes", "annotated.html", [
      [ "Class List", "annotated.html", "annotated_dup" ],
      [ "Class Index", "classes.html", null ],
      [ "Class Hierarchy", "hierarchy.html", "hierarchy" ],
      [ "Class Members", "functions.html", [
        [ "All", "functions.html", "functions_dup" ],
        [ "Functions", "functions_func.html", "functions_func" ],
        [ "Variables", "functions_vars.html", "functions_vars" ],
        [ "Typedefs", "functions_type.html", null ],
        [ "Enumerations", "functions_enum.html", null ],
        [ "Enumerator", "functions_eval.html", null ],
        [ "Related Functions", "functions_rela.html", null ]
      ] ]
    ] ],
    [ "Files", "files.html", [
      [ "File List", "files.html", "files_dup" ],
      [ "File Members", "globals.html", [
        [ "All", "globals.html", "globals_dup" ],
        [ "Functions", "globals_func.html", "globals_func" ],
        [ "Variables", "globals_vars.html", null ],
        [ "Typedefs", "globals_type.html", null ],
        [ "Macros", "globals_defs.html", null ]
      ] ]
    ] ],
    [ "Examples", "examples.html", "examples" ]
  ] ]
];

var NAVTREEINDEX =
[
"_application_8cc.html",
"_x_m_l_generator_visitor_8cc.html",
"class_chimera_t_k_1_1_entity_owner.html#aa3fc963233d251705cd197ced1aa0876",
"class_chimera_t_k_1_1_module_group.html#a189ec8c45486857aa0afad98cb58eb0a",
"conceptual_overview.html#conceptualOverview_ProcessVariable",
"namespacedraw_module_connections.html",
"struct_chimera_t_k_1_1_config_reader.html#ae0d987890819fc887d81cfc296da4de0",
"struct_chimera_t_k_1_1_model_1_1detail_1_1_visitor_helper.html#a790f9ae9eabb1fcb48e1ee68208fb8ea",
"struct_chimera_t_k_1_1_write_split_array_module.html#a11679c3da717d26cf44cd7be1af9eba2",
"struct_my_module.html#ab638d4f2b024c77e1ed62bf77c77dc76",
"struct_test_app.html#a9ccacf2a3513981e1240cd89a5b74679",
"struct_test_application_1_1_outer_group.html#a2d63ff3536978e7a5660e1ef0a59ccfa",
"struct_test_module_1_1_module1_1_1_sub_module.html#aabe62e673f145e192db3b4d16c2629a6",
"test_exception_handling_8cc.html#a2d723ad424b0ed2c485506f1a96f372e",
"test_version_propagation_8cc.html#a2a69b4f90e54adc39339dfe2d7f4be0d"
];

var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';