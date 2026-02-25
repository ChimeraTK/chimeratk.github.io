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
  [ "ChimeraTK-DeviceAccess", "index.html", [
    [ "First steps", "index.html#first_steps", [
      [ "Logical Name Mapping plugins", "index.html#lnm", null ]
    ] ],
    [ "Multi Value Registers (1D Register Accessors)", "accessor1d.html", null ],
    [ "2D Register Accessors", "accessor2d.html", null ],
    [ "Using and creating custom backends", "custom_backends.html", [
      [ "Writing Dummies: Extending the DummyBackend", "custom_backends.html#writing_dummies", null ],
      [ "The Plugin Mechanism", "custom_backends.html#plugin_mechanism", [
        [ "Linking custom backends at compile time (recommended)", "custom_backends.html#linking_backends", null ],
        [ "Loading custom backends at run time", "custom_backends.html#loading_backends", null ],
        [ "Writing your own backed", "custom_backends.html#writing_backends", null ],
        [ "Debian packaging scheme for external backends", "custom_backends.html#backend_packaging_scheme", [
          [ "Usage in the packaging scripts", "custom_backends.html#backend_packaging_usage", null ]
        ] ]
      ] ]
    ] ],
    [ "Data Consistency Group", "data_consistency_group.html", null ],
    [ "Design: AsyncNDRegisterAccessor", "design__async_n_d_register_accessor__numeric_addressed.html", [
      [ "Concept overview", "design__async_n_d_register_accessor__numeric_addressed.html#conceptOverview", [
        [ "AsyncNDRegisterAccessors and the AsyncAccessorManager", "design__async_n_d_register_accessor__numeric_addressed.html#design_AsyncAccessorManager", null ],
        [ "The TriggeredPollDistributor", "design__async_n_d_register_accessor__numeric_addressed.html#design_TriggeredPollDistributor", null ],
        [ "The SubDomain", "design__async_n_d_register_accessor__numeric_addressed.html#design_SubDomain", null ],
        [ "Vision: Using the VariableDistributor DOOCS backend", "design__async_n_d_register_accessor__numeric_addressed.html#design_envisioned_DoocsDistributor", null ]
      ] ],
      [ "The AsyncNDRegisterAccessor and the AsyncAccessorManager", "design__async_n_d_register_accessor__numeric_addressed.html#design_AsyncNDRegisterAccessor", [
        [ "Design decisions and implementation details", "design__async_n_d_register_accessor__numeric_addressed.html#AsyncNDRegisterAccessor_details", null ],
        [ "Exception handling", "design__async_n_d_register_accessor__numeric_addressed.html#AsyncNDRegisterAccessor_exceptions", null ],
        [ "Interface for implementing backends", "design__async_n_d_register_accessor__numeric_addressed.html#AsyncNDRegisterAccessor_usage", null ]
      ] ],
      [ "Implementation in the NumericAddressedBackend", "design__async_n_d_register_accessor__numeric_addressed.html#design_async_NumericAddressedBackend", [
        [ "Asynchronous registers in the map file", "design__async_n_d_register_accessor__numeric_addressed.html#design_async_map_file", [
          [ "Canonical interrupt names", "design__async_n_d_register_accessor__numeric_addressed.html#design_async_canonical_interrupt_name", null ]
        ] ]
      ] ]
    ] ],
    [ "Device Mapping", "dmap.html", [
      [ "CimeraTK device descriptor", "dmap.html#The", null ]
    ] ],
    [ "Exceptions and recovery", "exceptions.html", [
      [ "Exceptions", "exceptions.html#Exceptions", null ],
      [ "isFunctional()", "exceptions.html#isFunctional", null ],
      [ "Recovery", "exceptions.html#recovery", [
        [ "Recovery on re-open", "exceptions.html#recover_open", null ],
        [ "Automatic recovery", "exceptions.html#auto_recover", null ],
        [ "No recovery necessary", "exceptions.html#no_recovery", null ]
      ] ]
    ] ],
    [ "Logical Name Mapping Backend", "lmap.html", [
      [ "CDD syntax", "lmap.html#cdd", null ],
      [ "Map file syntax", "lmap.html#map", [
        [ "Variables and constants", "lmap.html#variables_and_constants", null ],
        [ "Self-referencing redirects", "lmap.html#internal_redirect", null ]
      ] ],
      [ "Accessor plugins", "lmap.html#plugins", [
        [ "List of plugins", "lmap.html#plugins_reference", [
          [ "multiply", "lmap.html#plugins_reference_multiply", null ],
          [ "math", "lmap.html#plugins_reference_math", null ],
          [ "forceReadOnly", "lmap.html#plugins_reference_force_read_only", null ],
          [ "forcePollingRead", "lmap.html#plugins_reference_force_polling_read", null ],
          [ "monostableTrigger", "lmap.html#plugins_reference_monostable_trigger", null ],
          [ "typeHintModifier", "lmap.html#plugins_reference_type_hint_modifier", null ],
          [ "Double Buffering plugin for the Logical Name Mapper", "lmap.html#double_buffering_plugin", null ],
          [ "bitRange", "lmap.html#plugins_reference_bit_range", null ]
        ] ],
        [ "tagModifier", "lmap.html#plugins_reference_tag_modifier", null ],
        [ "isStatusOutput", "lmap.html#plugins_reference_is_status_output", null ],
        [ "hasReverseRecovery", "lmap.html#plugins_reference_is_reverse_recovery", null ],
        [ "fanOut", "lmap.html#plugins_reference_fanout", null ]
      ] ]
    ] ],
    [ "Basic Example", "basic_example.html", null ],
    [ "Accessing numeric-addressed registers without a map file", "numeric_addresses.html", null ],
    [ "Questions and Answers", "q_and_a.html", [
      [ "Why do RegisterAccessors not have an assignment operator for other RegisterAccessors?", "q_and_a.html#why_no_accessor_assignment", [
        [ "Details:", "q_and_a.html#q_and_a_details", null ]
      ] ],
      [ "Why can I not read SEQUENCE registers?", "q_and_a.html#use_sequences", null ]
    ] ],
    [ "Technical specification: Mapping of DataConsistencyKeys to VersionNumbers V0.0WIP", "spec__data_consistency_key_mapping.html", null ],
    [ "Technical specification DeviceBackend", "spec__device_backend.html", null ],
    [ "Technical specification: TransferElement V1.2", "spec__transfer_element.html", null ],
    [ "Testing applications using the DummyBackends", "testing_with_dummy_backends.html", [
      [ "Specifying the dummies in the device map file", "testing_with_dummy_backends.html#dmap_specify_dummies", null ],
      [ "Writeing to read-only registers", "testing_with_dummy_backends.html#dummy_backends_write_readonly", null ]
    ] ],
    [ "Using push-type inputs with AccessMode::wait_for_new_data", "wait_for_new_data.html", null ],
    [ "XDMA backend", "md__2scratch_2dragon_2sources_2_chimera_t_k-_device_access_2doc_2xdma__backend.html", [
      [ "Prerequisites", "md__2scratch_2dragon_2sources_2_chimera_t_k-_device_access_2doc_2xdma__backend.html#autotoc_md17", null ],
      [ "Mapping of XDMA driver interfaces", "md__2scratch_2dragon_2sources_2_chimera_t_k-_device_access_2doc_2xdma__backend.html#autotoc_md18", [
        [ "AXI-Lite Master interface", "md__2scratch_2dragon_2sources_2_chimera_t_k-_device_access_2doc_2xdma__backend.html#autotoc_md19", null ],
        [ "AXI MM DMA interface", "md__2scratch_2dragon_2sources_2_chimera_t_k-_device_access_2doc_2xdma__backend.html#autotoc_md20", null ],
        [ "Interrupt lines (events)", "md__2scratch_2dragon_2sources_2_chimera_t_k-_device_access_2doc_2xdma__backend.html#autotoc_md21", null ]
      ] ]
    ] ],
    [ "Todo List", "todo.html", null ],
    [ "Namespaces", "namespaces.html", [
      [ "Namespace List", "namespaces.html", "namespaces_dup" ],
      [ "Namespace Members", "namespacemembers.html", [
        [ "All", "namespacemembers.html", null ],
        [ "Functions", "namespacemembers_func.html", null ],
        [ "Variables", "namespacemembers_vars.html", null ],
        [ "Typedefs", "namespacemembers_type.html", null ],
        [ "Enumerations", "namespacemembers_enum.html", null ],
        [ "Enumerator", "namespacemembers_eval.html", null ]
      ] ]
    ] ],
    [ "Concepts", "concepts.html", "concepts" ],
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
        [ "Related Symbols", "functions_rela.html", null ]
      ] ]
    ] ],
    [ "Files", "files.html", [
      [ "File List", "files.html", "files_dup" ],
      [ "File Members", "globals.html", [
        [ "All", "globals.html", "globals_dup" ],
        [ "Functions", "globals_func.html", "globals_func" ],
        [ "Variables", "globals_vars.html", null ],
        [ "Typedefs", "globals_type.html", null ],
        [ "Enumerations", "globals_enum.html", null ],
        [ "Macros", "globals_defs.html", "globals_defs" ]
      ] ]
    ] ],
    [ "Examples", "examples.html", "examples" ]
  ] ]
];

var NAVTREEINDEX =
[
"_access_mode_8cc.html",
"_l_n_m_accessor_plugin_8h_source.html",
"_subdevice_register_accessor_8h_source.html",
"class_async_test_dummy_1_1_accessor.html#a015a3ca048740e4ba633abbedba192f5",
"class_chimera_t_k_1_1_data_consistency_decorator.html#acc76665fc2fe4caab76b008eebfe9fa5",
"class_chimera_t_k_1_1_device.html#a09371dbc56ea330a47f74418b6796fb1",
"class_chimera_t_k_1_1_double_buffer_accessor.html#a76f9dca30c4f40fa5de370e83445ba8d",
"class_chimera_t_k_1_1_event_thread.html#a259ad7c3236c9f0d120e1dcdca68983b",
"class_chimera_t_k_1_1_l_n_m_backend_1_1_fan_out_plugin.html#a9bda4969e94199458e13cc23e5ea840c",
"class_chimera_t_k_1_1_l_n_m_backend_register_info.html#a15124f8b7e8aedbc4a1cbdbb5b78225f",
"class_chimera_t_k_1_1_metadata_catalogue.html#abeb2871a746b257075e939bdb0a4f27a",
"class_chimera_t_k_1_1_numeric_addressed_backend_muxed_register_accessor.html#af0c5333d00421ce70867d2818bbf7aa3",
"class_chimera_t_k_1_1_one_d_register_accessor.html#a98c7293b62457af898525882bfda1b33",
"class_chimera_t_k_1_1_register_catalogue.html#acf2f94778a105d7ddff16c74f72e7e23",
"class_chimera_t_k_1_1_subdevice_backend.html#a4cb9be498366d571fd497aa3b50f8f04",
"class_chimera_t_k_1_1_transfer_element.html#af46b4e9221d3919e0116ff76f6d41eac",
"class_chimera_t_k_1_1_two_d_register_accessor.html#a260355da3297d6de2aa27ae70d3d2f97",
"class_chimera_t_k_1_1_unified_backend_test.html#a6df37e8af45a7f594825ed251134e1a8",
"class_chimera_t_k_1_1async_1_1_data_consistency_key.html#a41e3ddca9f4242910e4b8e412ee11b65",
"class_chimera_t_k_1_1async_1_1_sub_domain.html#a2fe1b7eee8f5915111bfa72eb46d83cb",
"class_dummy_register_test_suite.html#aa6c8a19aeab529c53ab1775543e7c80c",
"functions.html",
"namespace_chimera_t_k.html#a563a28dc0406910d68b5b5beaa4cbd3c",
"read__temperature__doocs__zmq_8cpp_source.html",
"struct_chimera_t_k_1_1_exception_dummy_poll_decorator.html#a39c613419eebb2f29590fecded7a96d0",
"struct_chimera_t_k_1_1_l_n_m_backend_1_1_undecorated_params.html#aebbf5b2b1ceaf6f0ca59cf1e9ce4a84e",
"struct_chimera_t_k_1_1_unified_backend_test_1_1n_values_to_test__proxy__helper.html",
"struct_helper_process.html#a73dfa5afa109d6e521b10086f9c07a26",
"struct_not_registering_plugin.html#a569a3484da2cce7f6e0b8dd5da572587",
"struct_reg_variable_as_push_parameter_in_math__x__not__written1.html#aac08bd1da6be39745a95f6d382e6db1a",
"struct_triggered_int.html#a89e4068b8daed5dc881f5d9e569ae8e8",
"test_fixed_point_converter_8cpp.html#a24243cf772cc95c02d6e468ed17f8d95",
"test_mapped_image_8cc.html",
"test_transfer_element_8cpp.html#aa1ee42f0f136644f378af355f4e4f901"
];

var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';